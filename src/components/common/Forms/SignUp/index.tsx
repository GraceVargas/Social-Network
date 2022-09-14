import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register } = useForm();

  return (
    <form>
      <Form.Group className="m-2" controlId="registerName">
        <Form.Control type="lastname" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="m-2" controlId="registerLastName">
        <Form.Control type="name" placeholder="Apellido" />
      </Form.Group>
      <Form.Group className="m-2" controlId="registerEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select name="city">
          <option>Ciudad</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select name="country">
          <option>País</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2" controlId="formBirthDate">
        <Form.Control type="date" />
        <Form.Text className="text-muted">Fecha de nacimiento</Form.Text>
      </Form.Group>
      <Form.Group className="m-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="m-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Repita su contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export { SignUpForm };
