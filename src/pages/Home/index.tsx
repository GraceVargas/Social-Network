import { usePosts, useUsers } from "@hooks";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import { PostCard, Users } from "./components";
import "./styles.scss";

const HomePage = () => {
  const { users } = useUsers();
  const { posts } = usePosts();

  return (
    <>
      <Layout page="home">
        <Container>
          <Row className="py-3">
            <Col className="col-home">
              <aside>
                <Card className="card-home" bg="dark" text="white">
                  <Card.Body>
                    <Card.Title>Usuarios que seguís</Card.Title>
                  </Card.Body>
                </Card>
                <Card className="card-home" bg="dark" text="white">
                  <Card.Body>
                    <Card.Title>Usuarios que aún no seguís</Card.Title>
                    <Users users={users} />
                  </Card.Body>
                </Card>
              </aside>
            </Col>
            <Col className="col-home" xs={9}>
              <div>
                <Card className="card-home" bg="dark" text="white">
                  <Card.Body>
                    <Form className="p-2  ">
                      <Form.Label>¿Qué te gustaría compartirnos?</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresá el título de tu publicación"
                      />
                      <Form.Control as="textarea" aria-label="With textarea" />
                      <Button variant="primary" type="submit">
                        Publicar
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <PostCard posts={posts} />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const Home = withAuth(HomePage);
