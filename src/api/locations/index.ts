import { Location } from "../../types";
import { mapToArray } from "../helpers";

const getAll = async (): Promise<Location[]> => {
  try {
    const response = await fetch(
      "https://social-network-265eb-default-rtdb.firebaseio.com/locations.json"
    );
    const data = await response.json();
    return mapToArray(data);
  } catch (error) {
    throw new Error();
  }
};
  
  
export const locationsApi = { getAll };