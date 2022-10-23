import { postsApi } from "@api";
import { PostsContext } from "@contexts";
import { PostPayload } from "@types";
import { useContext, useEffect } from "react"

const usePosts = () => {

    const { loadPosts, posts } = useContext(PostsContext);

    useEffect(() => {
        getPosts();
        console.log(posts);
                
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
            const resp = await postsApi.add(post);
            } catch(err: any) {
                throw new Error(err.toString())
                }
        }

    
    return { posts, addPost };
}

export { usePosts }