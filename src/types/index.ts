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
    sessionToken: string,
    state: string,
}