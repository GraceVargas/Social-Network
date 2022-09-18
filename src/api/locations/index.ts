import { Location } from "../../types";
import { mapToArray } from "../helpers";
import { apiDB } from "../../utils";

const getAll = async (): Promise<Location[]> => {
  try {
    const response = await apiDB.get("/locations.json");
    return mapToArray(response.data);
  } catch (error) {
    throw new Error();
  }
};
  
  
export const locationsApi = { getAll };