import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { locationsApi } from "../../../../api/locations";
import { useEffect, useState } from "react";
import { Location } from "../../../../types";

const SignUpForm = () => {
  const { register } = useForm();

  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    locationsApi.getAll().then((response) => {
      setLocations(response);
    });
  });

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
          <option disabled>Ciudad</option>
          {locations.map(({ city, id }) => {
            return (
              <option value={city} id={id}>
                {city}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select name="state">
          <option disabled>Provincia</option>
          {locations.map(({ state, id }) => {
            return (
              <option value={state} id={id}>
                {state}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select name="country">
          <option disabled>País</option>
          {locations.map(({ country, id }) => {
            return (
              <option value={country} id={id}>
                {country}
              </option>
            );
          })}
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
      <Button variant="primary" type="submit" className="m-2">
        Enviar
      </Button>
    </form>
  );
};

export { SignUpForm };
