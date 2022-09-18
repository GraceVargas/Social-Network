import { Card } from "react-bootstrap";
import { Layout } from "../../components/common";
import "./styles.scss";

const Login = () => {
  return (
    <>
      <Layout hideHeader hideFooter page="login">
        <Card className="card-login" bg="dark" text="white">
          <Card.Body>
            <Card.Title className="text-center" as="h1">
              ConectADAs
            </Card.Title>
            <Card.Subtitle className="mt-4" as="h5">
              Inicia sesión:
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <small className="m-2">Si aún no tienes cuenta</small>
            <Card.Link>Registrate</Card.Link>
          </Card.Footer>
        </Card>
      </Layout>
    </>
  );
};

export { Login };
