import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TRegisterFormValues, registerFormSchema } from "./resgisterFormSchem";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "../Input";
import { Button } from "@chakra-ui/react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };
  return (

    <form onSubmit={handleSubmit(submit)}>
      <FormInput
        type="text"
        placeholder="Digite seu nome"
        {...register("name")}
        error={errors?.name}
      />
      <FormInput
        type="email"
        placeholder="Digite seu e-mail"
        {...register("email")}
        error={errors.email}
      />
      <FormInput
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password}
      />
      <FormInput
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirm")}
        error={errors.confirm}
      />
      <FormInput
        type="text"
        placeholder="Digite seu código"
        {...register("zipcode")}
        error={errors.zipcode}
      />
      <select {...register("userType")}>
        <option value="customer">Contratante</option>
        <option value="professional">Profissional</option>
      </select>
      <Button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};
