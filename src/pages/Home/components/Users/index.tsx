import { usersApi } from "@api";
import { useAuth, useUsers } from "@hooks";
import { User } from "@types";
import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.scss";

type Props = {
  users: User[];
  addBtn?: boolean;
  removeBtn?: boolean;
};

const Users: FC<Props> = ({ users, addBtn, removeBtn }) => {
  const { me } = useAuth();
  const { friendsIds, removeFriend } = useUsers();

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
                    // onClick={() => }>
                  >
                    ➕
                  </Button>
                )}
                {friendsIds && removeBtn && (
                  <Button
                    className="d-inline"
                    variant="link"
                    onClick={() => removeFriend(friendsIds, user.id)}
                  >
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
