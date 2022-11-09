import { formatDate } from "@utils";
import { postsApi } from "@api";
import { useAuth } from "@hooks";
import { Comment, Post } from "@types";
import { FC, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./styles.scss";


type Props = {
  posts: Post[];
};

const PostCard: FC<Props> = ({ posts }) => {
  const { me } = useAuth();

  const [comment, setComment] = useState<Comment>();

  return (
    <Card className="card-home">
      {posts.map((post) => {
        let comments: Comment[] = [];
        post.comments ? (comments = post.comments) : (comments = []);

        return (
          <Card className="card-post" key={post.id} bg="dark" text="white">
            <Card.Body>
              <Row>
                <>
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
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="card-text my-3">
                    {post.detail}
                  </Card.Text>
                </Col>
                  {comments &&
                    comments.map((comment) => {
                      return (
                        <div className="post-comment-card d-flex">
                          <div className="comment-user-logo">🗣</div>
                          <div className="detail d-flex justify-content-between">
                            <p>
                              <span className="comment-user-name">{`${comment.user.name} ${comment.user.lastname}`}</span>
                              {` -  ${comment.comment}`}
                            </p>
                            <div>{comment.date.toString()}</div>
                          </div>
                        </div>
                      );
                    })}

                  {me && (
                    <Form
                      className="d-flex"
                      onSubmit={(e) => {
                        e.preventDefault();
                        comment && comments.push(comment);
                        postsApi.patch(post.id, { comments });
                      }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Deja tu comentario"
                        name="comment"
                        onChange={(e) =>
                          setComment({
                            comment: e.target.value,
                            user: {
                              id: me.id,
                              name: me.name,
                              lastname: me.lastname,
                            },
                            date: new Date(),
                          })
                        }
                      />
                      <Button variant="link" type="submit">
                        💬
                      </Button>
                    </Form>
                  )}
                </>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
};

export { PostCard };
