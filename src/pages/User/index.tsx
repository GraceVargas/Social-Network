import { Layout } from "../../components/common";
import { withAuth } from "@hoc";
import { Button, Card, Container } from "react-bootstrap";
import { useUsers } from "@hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "@types";
import { formatDate } from "@utils";
import "./styles.scss";

const UserPage = () => {
  const { users } = useUsers();
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<User[]>();

  useEffect(() => {
    const user = users?.filter((user) => user.id === id);
    user && setCurrentUser(user);
  }, [id]);

  return (
    <>
      <Layout page="user">
        <Container className="pt-4">
          <Card className="userDetailCard" bg="dark" text="white">
            <div className="user-detail-logo">🗣</div>
            <Card.Title className="p-2">Detalle del usuario</Card.Title>
            <Card.Body>
              {currentUser?.map((data) => {
                return (
                  <>
                    <ul>
                      <li>
                        Nombre: {data.name} {data.lastname}
                      </li>
                      <li>Fecha de nacimiento: {formatDate(data.birthdate)}</li>
                      <li>Email: {data.email}</li>
                      <li>Ciudad: {data.city}</li>
                      <li>País: {data.country}</li>
                    </ul>
                  </>
                );
              })}
              <Button onClick={() => navigate("/")}>Volver</Button>
            </Card.Body>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export const UserDetail = withAuth(UserPage);
