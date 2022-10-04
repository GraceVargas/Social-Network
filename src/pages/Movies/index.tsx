import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import Form from "react-bootstrap/Form";

const MoviesPage = () => {
  return (
    <>
      <Layout page="movies">
        <Form className="m-4" id="">
          <div>
            <Form.Control
              type="text"
              placeholder="Buscar película"
              id="search-movie"
            />
          </div>
        </Form>
        <div className="row"></div>
      </Layout>
    </>
  );
};

export const Movies = withAuth(MoviesPage);
