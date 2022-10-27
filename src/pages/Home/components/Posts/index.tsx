import { postsApi } from "@api";
import { Post } from "@types";
import { FC } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

type Props = {
  posts: Post[];
};

const PostCard: FC<Props> = ({ posts }) => {
  let comments: string[] = [];

  const handleSubmit = (id: string, e: any) => {
    e.preventDefault();
    comments.push(e.target.value);
    postsApi.patch(id, { comments: e });
  };

  console.log(comments);

  return (
    <Card className="card-home">
      {posts.map((post) => {
        return (
          <Card className="card-post" key={post.id} bg="dark" text="white">
            <Card.Body>
              <Row>
                {post.image && (
                  <Col xs={6} md={3}>
                    <Card.Img
                      className="post-card-img"
                      variant="top"
                      alt={`post-${post.image}`}
                      src={`https://image.tmdb.org/t/p/w500/${post.image}`}
                    />
                  </Col>
                )}
                <Col>
                  <div className="d-flex justify-content-end">
                    <Card.Subtitle className="mx-4 text-muted align-self-center">
                      {`${post.user.name} ${post.user.lastname}`}
                    </Card.Subtitle>
                    <span className="align-self-center">
                      {post.date.toString()}
                    </span>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="card-text my-3">
                    {post.detail}
                  </Card.Text>
                </Col>
                <Form
                  className="d-flex"
                  onSubmit={() => handleSubmit(post.id, comments)}
                >
                  <Form.Control
                    type="text"
                    placeholder="Deja tu comentario"
                    name="comment"
                  />
                  <Button variant="link" type="submit">
                    💬
                  </Button>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
};

export { PostCard };
