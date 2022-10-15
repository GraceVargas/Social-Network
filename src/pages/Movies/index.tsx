import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import Form from "react-bootstrap/Form";
import { moviesApi } from "../../api/movies";
import { useState, useEffect } from "react";
import { Movie } from "@types";
import { MovieCard, Pagination } from "./components";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [totalPages, setTotalPages] = useState<number>();

  const [params, setParams] = useSearchParams();

  const handleOnChangePage = (page: number) => {
    params.set("page", page.toString());
    setParams(params);
  };

  useEffect(() => {
    moviesApi
      .search(
        params.get("movie") || "",
        params.get("page") ? Number(params.get("page")) : 1
      )
      .then((data) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [params]);

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
                value={params.get("movie") || ""}
                onChange={(e) => {
                  params.set("movie", e.target.value);
                  setParams(params);
                }}
              />
            </div>
          </Form>
          <Row>
            {movies &&
              movies.map((movie) => {
                return (
                  <Col sm={3} lg={2} key={movie.id}>
                    {MovieCard({ movie })}
                  </Col>
                );
              })}
          </Row>
          <div className="pagination-container">
            <Pagination
              current={Number(params.get("page"))}
              total={totalPages!}
              onChangePage={handleOnChangePage}
            />
          </div>
        </Container>
      </Layout>
    </>
  );
};

export const Movies = withAuth(MoviesPage);
