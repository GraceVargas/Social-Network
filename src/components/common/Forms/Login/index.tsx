import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { LoginFormType } from "../../../../types";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";

type Props = {
  onSubmit: (formData: LoginFormType) => void;
};

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="m-2" controlId="loginEmail">
        <Form.Control type="email" placeholder="Email" {...register("email")} />
        {errors.email?.message}
      </Form.Group>
      <Form.Group className="m-2" controlId="loginPassword">
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

export { LoginForm };
