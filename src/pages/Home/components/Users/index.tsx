import { User } from "@types";
import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.scss";

type Props = {
  users: User[];
  addBtn?: boolean;
  removeBtn?: boolean;
};

const remove = (users: User[], user: User) => {
  let index = users.indexOf(user);
  users.splice(index, 1);
};

const Users: FC<Props> = ({ users, addBtn, removeBtn }) => {
  return (
    <Card bg="dark">
      {users.map((user) => {
        return (
          <Card className="user-card" bg="dark" border="primary" key={user.id}>
            <Card.Body className="d-flex">
              {`${user.name} ${user.lastname}`}
              <div className="ms-auto">
                {addBtn && (
                  <Button
                    className="d-inline"
                    variant="link"
                    onClick={() => remove(users, user)}
                  >
                    ➕
                  </Button>
                )}
                {removeBtn && (
                  <Button className="d-inline" variant="link">
                    ➖
                  </Button>
                )}
                {removeBtn && <a href={`/user/${user.id}`}>👁‍🗨</a>}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
};

export { Users };
