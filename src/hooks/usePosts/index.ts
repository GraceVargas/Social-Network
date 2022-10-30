/* eslint-disable react-hooks/exhaustive-deps */
import { postsApi } from "@api";
import { PostsContext } from "@contexts";
import { PostPayload } from "@types";
import { useContext, useEffect } from "react"
import { useAuth } from "../useAuth";


const usePosts = () => {

    const { loadPosts, posts } = useContext(PostsContext);
    const { me } = useAuth();

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
            getPosts();
        } catch(err: any) {
            throw new Error(err.toString())
        }
    }

    // const friends = me?.friends;  
    // let postsFriends = [];
    // for (let post of posts) {
    //     if (friends?.includes(post.user.id)) {  
    //     postsFriends.push(post);
    //     }
    // }

    
    return { posts, addPost, /* postsFriends */ };
}

export { usePosts }