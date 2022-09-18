
import { Layout, SignUpForm } from "../../components/common";
import { Card } from "react-bootstrap";
import "./styles.scss";
import { usersApi } from "../../api";
import { UserPayload } from "../../types";


const Signup = () => {
  const handleSubmit = (formData: UserPayload) => {
    usersApi.add(formData);
  };

  return (
    <>
      <Layout hideHeader hideFooter page="signup">

        <Card className="card-signup" bg="dark" text="white">
          <Card.Title className="text-center" as="h1">
            ConectADAs
          </Card.Title>
          <Card.Body>
            Crea tu cuenta ingresando los siguientes datos:
            <SignUpForm onSubmit={handleSubmit} />

          </Card.Body>
        </Card>
      </Layout>
    </>
  );
};

export { Signup };
