import { User } from "@types";
import { FC, ReactNode } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.scss";

type Props = {
  users?: User[];
  button: {
    handleClick: (user: User) => void;
    content: ReactNode | string;
  };
};

const Users: FC<Props> = ({ users, button }) => {
  return (
    <Card bg="dark">
      <Card.Body>
        {users?.map((user) => (
          <Card className="user-card" bg="dark" border="primary" key={user.id}>
            <Card.Body className="d-flex">
              {`${user.name} ${user.lastname}`}
              <Button
                className="d-inline"
                variant="link"
                onClick={() => button.handleClick(user)}
              >
                {button.content}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
};

export { Users };
