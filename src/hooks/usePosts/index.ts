import { postsApi } from "@api";
import { Post } from "@types";
import { useState } from "react"

const usePosts = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        try {
            const response = await postsApi.getAll();
            setPosts(response);
            
        }  catch(err: any) {
            throw new Error(err.toString())
            }
        }

        const addPost = async (post: Post) => {
            try {
            const resp = await postsApi.add(post);
            } catch(err: any) {
                throw new Error(err.toString())
                }
        }

    
    return { posts, addPost };
}

export { usePosts }