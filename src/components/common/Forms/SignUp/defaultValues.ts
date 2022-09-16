import { UserPayload } from "../../../../types";

export const defaultValues: UserPayload = {
    name: "",
    lastname: "",
    email: "",
    city: "",
    state: "",
    country: "",
    birthdate: new Date(),
    password: "",
  };