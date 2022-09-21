import { Card } from "react-bootstrap";
import { Layout } from "../../components/common";
import { LoginForm } from "../../components/common/Forms";
import { withAuth } from "../../hoc";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormType } from "../../types";
import "./styles.scss";

const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (formData: LoginFormType) => {
    login(formData);
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
            <Card.Link href="/signup">Registrate</Card.Link>
          </Card.Footer>
        </Card>
      </Layout>
    </>
  );
};

export const Login = withAuth(LoginPage);
