import { User } from "../../types";
import { apiDB } from "../../utils";
import { mapToArray } from "../helpers";


const getAll = async (): Promise<User[]> => {
  try {
    const response = await apiDB.get("/users.json")
    return mapToArray(response.data);
  } catch (error) {
    throw new Error();
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
  } catch (error) {
    throw new Error();
  }
}


const add = (payload: Partial<User>) => {
    try {
    apiDB.post('/users.json', JSON.stringify(payload));
  } catch (error) {
    throw new Error();
  }
};



const patch = async (id: string, payload: Partial<User>) => {
  try {
    apiDB.patch(`/users/${id}.json`, JSON.stringify(payload));
  } catch (error) {
    throw new Error();
  }
};


export const usersApi = { getAll, get, remove, add, patch };