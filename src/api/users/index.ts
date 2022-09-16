import { User, UserPayload } from "../../types";
import { mapToArray } from "../helpers";

const getAll = async (): Promise<User[]> => {
  try {
    const response = await fetch(
      "https://social-network-265eb-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    return mapToArray(data);
  } catch (error) {
    throw new Error();
  }
};
  
  
  const get = async (id:string) => {
    try {
    const response = await fetch(
      `https://social-network-265eb-default-rtdb.firebaseio.com/users/${id}.json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}


const remove = async (id: string) => {
  const option = {
    method: "DELETE"};
  try {
    const response = await fetch(
      `https://social-network-265eb-default-rtdb.firebaseio.com/users/${id}.json`,
      option
    );
  } catch (error) {
    throw new Error();
  }
}


const add = (payload: UserPayload) => {
  const option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    fetch(
     `https://social-network-265eb-default-rtdb.firebaseio.com/users.json`,
      option
    );
  } catch (error) {
    throw new Error();
  }
};



const patch = async (id: string, payload: Partial<User>) => {
  const option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    await fetch(
      `https://social-network-265eb-default-rtdb.firebaseio.com/users${id}.json`,
      option
    );
  } catch (error) {
    throw new Error();
  }
};

export const usersApi = { getAll, get, remove, add, patch };