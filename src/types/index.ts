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

export type Movie = {
    adult: boolean,
    backdrop_path: null,
    genre_ids: [
        number
    ],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type Comment = {
    user: Pick<User, "id" | "name" | "lastname">,
    comment: string,
    date: Date,
}

export type Post = {
    id: string,
    user: Pick<User, "id" | "name" | "lastname">,
    image?: string,
    title: string,
    detail: string,
    comments: Comment[],
    date: Date,
}