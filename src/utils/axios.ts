import axios from 'axios';

const apiDB = axios.create({
    baseURL: 'https://social-network-265eb-default-rtdb.firebaseio.com/'
})


const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '36ce6a3c2dc38c04a3b332f91ee370ce'
    }
})

export { apiDB, apiMovies }