import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import Form from "react-bootstrap/Form";
import { moviesApi } from "../../api/movies";
import { useState, useEffect } from "react";
import { Movie } from "@types";

const MoviesPage = () => {
  const [movieSearched, setMovieSearched] = useState("");

  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    moviesApi
      .search(movieSearched, 1)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [movieSearched]);

  return (
    <>
      <Layout page="movies">
        <Form className="m-4" id="">
          <div>
            <Form.Control
              type="text"
              placeholder="Buscar película"
              id="search-movie"
              value={movieSearched}
              onChange={(e) => {
                setMovieSearched(e.target.value);
              }}
            />
          </div>
        </Form>
        <div>
          {movies &&
            movies.map((movie) => {
              return (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`poster-${movie.title}`}
                  />

                  <div>{movie.title}</div>
                  <div>{movie.overview}</div>
                </>
              );
            })}
        </div>
      </Layout>
    </>
  );
};

export const Movies = withAuth(MoviesPage);
