import { User } from "@types";
import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.scss";

type Props = {
  users: User[];
};

const Users: FC<Props> = ({ users }) => {
  return (
    <Card bg="dark">
      {users.map((user) => {
        return (
          <Card className="user-card" bg="dark" border="primary" key={user.id}>
            <Card.Body className="d-flex">
              {`${user.name} ${user.lastname}`}{" "}
              <div className="ms-auto">
                {" "}
                <a href="/">+</a>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
};

export { Users };
