import { apiMovies } from "../../utils";



const search = async (query: string, page: number) => {
    try {
      const response = await apiMovies.get('/search/movie', {params: {query, page}})  
      return response.data;
    } catch (error) {
      throw new Error();
    }
  };
    
    
  export const moviesApi = { search };