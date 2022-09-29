import { Card } from "react-bootstrap";
import { Layout, LoginForm } from "../../components/common";
import { withAuth } from "../../hoc";
import { useAlert } from "../../hooks";
import { useAuth } from "../../hooks/useAuth";
import { LoginFormType } from "../../types";
import "./styles.scss";

const LoginPage = () => {
  const { login, me } = useAuth();

  const { showAlert } = useAlert();

  const handleSubmit = async (formData: LoginFormType) => {
    try {
      await login(formData);
    } catch (err: any) {
      showAlert({
        text: err.toString(),
        // type: "success",
      });
    }
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
