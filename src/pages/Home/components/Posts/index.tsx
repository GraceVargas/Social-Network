import { Post } from "@types";
import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";

type Props = {
  posts: Post[];
};

const PostCard: FC<Props> = ({ posts }) => {
  return (
    <Card className="card-home">
      {posts.map((post) => {
        return (
          <Card className="card-post" key={post.id} bg="dark" text="white">
            <Card.Body>
              <Row>
                <Col xs={6} md={3}>
                  <Card.Img
                    className="post-card-img"
                    variant="top"
                    alt={`post-${post.image}`}
                    src={`https://image.tmdb.org/t/p/w500/${post.image}`}
                  />
                </Col>
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
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
};

export { PostCard };
