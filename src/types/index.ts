export type User =  {
    id: string,
    email: string,
    name: string,
    lastname: string,
    avatar: string,
    birthdate: Date,
    city: string,
    country: string,
    friends: string[],
    password: string,
    sessionToken: string | null,
    state: string,
}

export type UserPayload =  Omit<User, "id" | "sessionToken" | "friends" | "avatar">;

export type LoginFormType = {
    email: string;
    password: string;
  };


export type Location =  {
    id: string,
    city: string,
    country: string,
    state: string,
}