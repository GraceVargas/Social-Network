import { Layout } from "../../components/common";
import Card from "react-bootstrap/Card";
import "./styles.scss";

const Signup = () => {
  return (
    <>
      <Layout hideHeader hideFooter page="signup">
        <Card className="card-signup text-center" bg="dark" text="white">
          <Card.Title as="h1">ConectADAs</Card.Title>
          <Card.Body>
            Crea tu cuenta ingresando los siguientes datos:
            <form action=""></form>
          </Card.Body>
        </Card>
      </Layout>
    </>
  );
};

export { Signup };
