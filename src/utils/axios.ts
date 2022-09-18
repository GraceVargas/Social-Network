import axios from 'axios';

const apiDB = axios.create({
    baseURL: 'https://social-network-265eb-default-rtdb.firebaseio.com/'
})

export { apiDB }