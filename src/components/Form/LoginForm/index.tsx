import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, TLoginFormValues } from "./loginFormSchema";
import { FormInput } from "../Input";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { theme } from "../../../styles/theme";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
  });
  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };
  const registerRedirect = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInput 
        label="E-mail"
        type="text"
        placeholder="Digite seu e-mail"
        {...register("email")}
        error={errors.email}
      />
      <FormInput
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
        error={errors.password}
      />
      <Button bgColor={theme.colors.primary} color={theme.colors.white} type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </Button>
      <Button onClick={registerRedirect}>Cadastre-se</Button>
    </form>
  );
};
