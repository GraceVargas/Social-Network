import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import Form from "react-bootstrap/Form";
import { moviesApi } from "../../api/movies";
import { useState, useEffect } from "react";
import { Movie } from "@types";
import { MovieCard } from "./components";
import { Col, Container, Row } from "react-bootstrap";

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
        <Container fluid>
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
          <Row>
            {movies &&
              movies.map((movie) => {
                return (
                  <Col sm={3} lg={2}>
                    {MovieCard({ movie })}
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const Movies = withAuth(MoviesPage);
