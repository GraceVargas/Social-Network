import { Card } from "react-bootstrap";
import { Layout } from "../../components/common";
import { LoginForm } from "../../components/common/Forms";
import { LoginFormType } from "../../types";
import "./styles.scss";

const Login = () => {
  const handleSubmit = (formData: LoginFormType) => {
    console.log(formData);
  };

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
            <LoginForm onSubmit={handleSubmit} />
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
