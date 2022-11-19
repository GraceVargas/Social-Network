import { usePosts, useUsers, useAuth } from "@hooks";
import { PostPayload, User } from "@types";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Layout } from "../../components/common";
import { withAuth } from "../../hoc";
import { PostCard, Users } from "./components";
import "./styles.scss";

const HomePage = () => {
  const { users, removeFriend, addFriend } = useUsers();
  const { addPost, posts } = usePosts();
  const { me } = useAuth();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const initialData = {
    user: { id: "", name: "", lastname: "" },
    title: "",
    detail: "",
    date: new Date(),
  };

  const [postText, setPostText] = useState<PostPayload>(initialData);

  useEffect(() => {
    me &&
      setPostText((prevState) => ({
        ...prevState,
        user: { id: me.id, name: me.name, lastname: me.lastname },
      }));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addPost(postText);
  };

  const viewFriend = (user: User) => {
    navigate(`/user/${user.id}`);
  };

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
                    <Users
                      users={users?.filter(
                        (user) =>
                          user.id !== me?.id && me?.friends?.includes(user.id)
                      )}
                      button={{ handleClick: removeFriend, content: <>➖</> }}
                      extraButton={{
                        handleClick: viewFriend,
                        content: <>👁</>,
                      }}
                    />
                  </Card.Body>
                </Card>
                <Card className="card-home" bg="dark" text="white">
                  <Card.Body>
                    <Card.Title>Usuarios que aún no seguís</Card.Title>
                    <Users
                      users={users?.filter(
                        (user) =>
                          user.id !== me?.id && !me?.friends?.includes(user.id)
                      )}
                      button={{ handleClick: addFriend, content: <>➕</> }}
                    />
                  </Card.Body>
                </Card>
              </aside>
            </Col>
            <Col className="col-home" xs={9}>
              <div>
                <Card className="card-home" bg="dark" text="white">
                  <Card.Body>
                    <Form className="p-2" onSubmit={handleSubmit}>
                      <Form.Label>¿Qué te gustaría compartirnos?</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingresá el título de tu publicación"
                        onChange={(e) =>
                          setPostText((prevState) => ({
                            ...prevState,
                            title: e.target.value,
                          }))
                        }
                      />
                      <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        onChange={(e) =>
                          setPostText((prevState) => ({
                            ...prevState,
                            detail: e.target.value,
                          }))
                        }
                      />
                      <Button variant="primary" type="submit">
                        Publicar
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
              <div>
                {posts && (
                  <PostCard
                    posts={posts.filter(
                      (post) =>
                        post.user.id === me?.id ||
                        me?.friends?.includes(post.user.id)
                    )}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export const Home = withAuth(HomePage);
