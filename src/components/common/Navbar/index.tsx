import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import "./styles.scss";

const NavScrollExample = () => {
  const { logOut, me } = useAuth();

  const handleClick = async () => {
    await logOut();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!me && (
              <NavLink className="nav-link" to="/login">
                Ingresar
              </NavLink>
            )}
            {!me && (
              <NavLink className="nav-link" to="/signup">
                Registrarse
              </NavLink>
            )}
            {me && (
              <NavLink className="nav-link" to={`/user/${me.id}`}>
                Mi Perfil
              </NavLink>
            )}
            {me && (
              <NavLink className="nav-link" to="/movies">
                Películas
              </NavLink>
            )}
            {me && (
              <Button variant="dark" className="nav-link" onClick={handleClick}>
                Cerrar sesión
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
        <NavLink className="navbar-brand" to="/">
          ConectADAs
        </NavLink>
      </Container>
    </Navbar>
  );
};

export { NavScrollExample as Navbar };
