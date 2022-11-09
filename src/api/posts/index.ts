import { Post, PostPayload } from "../../types";
import { apiDB } from '@utils'
import { mapToArray } from "../helpers";



const add = (payload: PostPayload) => {
    try {
    apiDB.post('/posts.json', JSON.stringify(payload));
  } catch (error) {
    throw new Error();
  }
};

const getAll = async (): Promise<Post[]> => {
    try {
      const response = await apiDB.get("/posts.json")
      return mapToArray(response.data);
    } catch (error) {
      throw new Error("No se pudo realizar la request");
    }
  };

  const patch = async (id: string, payload: Partial<Post>) => {
    try {
     const response = await apiDB.patch(`/posts/${id}.json`, JSON.stringify(payload));
     return response;
    } catch (error) {
      throw new Error();
    }
  };

export const postsApi = { add, getAll, patch };