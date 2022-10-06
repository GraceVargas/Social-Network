import { User, UserPayload } from "../../types";
import { apiDB } from '@utils'
import { mapToArray } from "../helpers";


const getAll = async (): Promise<User[]> => {
  try {
    const response = await apiDB.get("/users.json")
    return mapToArray(response.data);
  } catch (error) {
    throw new Error("No se pudo realizar la request");
  }
};
  
  
  const get = async (id:string) => {
    try {
    const response = await apiDB.get(`/users/${id}.json`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
}


const remove = async (id: string) => {
  try {
    const response = await apiDB.delete(`/users/${id}.json`);
    return response;
  } catch (error) {
    throw new Error();
  }
}


const add = (payload: UserPayload) => {
    try {
    apiDB.post('/users.json', JSON.stringify(payload));
  } catch (error) {
    throw new Error();
  }
};



const patch = async (id: string, payload: Partial<User>) => {
  try {
   const response = await apiDB.patch(`/users/${id}.json`, JSON.stringify(payload));
   return response;
  } catch (error) {
    throw new Error();
  }
};


export const usersApi = { getAll, get, remove, add, patch };