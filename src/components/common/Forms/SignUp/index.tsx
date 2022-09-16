import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { locationsApi } from "../../../../api/locations";
import { useEffect, useState, FC } from "react";
import { Location, UserPayload } from "../../../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";

type Props = {
  onSubmit: (formData: UserPayload) => void;
};

const SignUpForm: FC<Props> = ({ onSubmit }) => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    locationsApi
      .getAll()
      .then((response) => {
        setLocations(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPayload>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="m-2" controlId="registerName">
        <Form.Control type="name" placeholder="Nombre" {...register("name")} />
        {errors.name?.message}
      </Form.Group>
      <Form.Group className="m-2" controlId="registerLastName">
        <Form.Control
          type="lastname"
          placeholder="Apellido"
          {...register("lastname")}
        />
      </Form.Group>
      <Form.Group className="m-2" controlId="registerEmail">
        <Form.Control type="email" placeholder="Email" {...register("email")} />
        {errors.email?.message}
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select {...register("city")}>
          <option disabled>Ciudad</option>
          {locations.map(({ city, id }) => {
            return (
              <option value={city} id={id} key={id}>
                {city}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select {...register("state")}>
          <option disabled>Provincia</option>
          {locations.map(({ state, id }) => {
            return (
              <option value={state} id={id} key={id}>
                {state}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2">
        <Form.Select {...register("country")}>
          <option disabled>País</option>
          {locations.map(({ country, id }) => {
            return (
              <option value={country} id={id} key={id}>
                {country}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="m-2" controlId="formBirthDate">
        <Form.Control type="date" {...register("birthdate")} />
        <Form.Text className="text-muted">Fecha de nacimiento</Form.Text>
      </Form.Group>
      <Form.Group className="m-2" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          {...register("password")}
        />
        {errors.password?.message}
      </Form.Group>
      <Button variant="primary" type="submit" className="m-2">
        Enviar
      </Button>
    </form>
  );
};

export { SignUpForm };
