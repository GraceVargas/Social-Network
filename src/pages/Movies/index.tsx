import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import Form from "react-bootstrap/Form";
import { moviesApi } from "../../api/movies";
import { useState, useEffect } from "react";
import { Movie, PostPayload } from "@types";
import { MovieCard, Pagination } from "./components";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useSearchParams } from "react-router-dom";
import { useAuth, usePosts } from "@hooks";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [totalPages, setTotalPages] = useState<number>();
  const { me } = useAuth();

  const { addPost } = usePosts();

  const [params, setParams] = useSearchParams();

  const handleOnChangePage = (page: number) => {
    params.set("page", page.toString());
    setParams(params);
  };

  const handleClick = (payload: PostPayload) => {
    addPost(payload);
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
              me &&
              movies.map((movie) => {
                return (
                  <Col sm={3} lg={2} key={movie.id}>
                    <MovieCard
                      movie={movie}
                      onClick={() =>
                        handleClick({
                          user: {
                            id: me.id,
                            name: me.name,
                            lastname: me.lastname,
                          },
                          image: movie.poster_path,
                          title: movie.title,
                          detail: movie.overview,
                          date: new Date(),
                        })
                      }
                    />
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
