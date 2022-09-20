import { Navbar, Button, Container, Nav, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavScrollExample = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavLink className="navbar-brand" to="/">
          ConectADAs
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/login">
              Ingresar
            </NavLink>
            <NavLink className="nav-link" to="/signup">
              Registrarse
            </NavLink>
            <NavLink className="nav-link" to="/">
              Cerrar sesión
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar amigos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavScrollExample as Navbar };
