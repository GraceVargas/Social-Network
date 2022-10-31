/* eslint-disable react-hooks/exhaustive-deps */
import { postsApi } from "@api";
import { PostsContext } from "@contexts";
import { PostPayload } from "@types";
import { useContext, useEffect } from "react"
import { useAuth } from "../useAuth";


const usePosts = () => {

    const { loadPosts, posts } = useContext(PostsContext);
    const { refreshMe } = useAuth();

    useEffect(() => {
        !posts && getPosts();     
    }, [])
    


    const getPosts = async () => {
        try {
            const response = await postsApi.getAll();
            loadPosts(response);           
        }  catch(err: any) {
            throw new Error(err.toString())
        }
    }

    const addPost = async (post: PostPayload) => {
        try {
            await postsApi.add(post);
            await refreshMe();
            getPosts();
        } catch(err: any) {
            throw new Error(err.toString())
        }
    }
    
    return { posts, addPost };
}

export { usePosts }