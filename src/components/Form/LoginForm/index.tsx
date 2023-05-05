import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, TLoginFormValues } from "./loginFormSchema";
import { FormInput } from "../Input";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading } from "@chakra-ui/react";
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
    <>
      <Flex
        flexDirection={"column"}
        w={"320px"}
        h={["276px", "276px", "320px", "320px"]}
        align={"left"}
        bgColor={theme.colors.secondary}
        px={"2.5%"}
        borderRadius={"8px"}
      >
        <Heading
          fontSize={"24px"}
          fontWeight={"700"}
          color={theme.colors.white}
          mb={["0", "0", "0", "15px"]}
        >
          Login
        </Heading>
        <form onSubmit={handleSubmit(submit)}>
          <FormInput
            mb={["5px", "5px", "5px", "10px"]}
            h={"35px"}
            bgColor={theme.colors.gray[200]}
            label="E-mail"
            type="text"
            placeholder="Digite seu e-mail"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("email")}
            error={errors.email}
          />
          <FormInput
            mb={["5px", "5px", "5px", "10px"]}
            h={"35px"}
            bgColor={theme.colors.gray[200]}
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("password")}
            error={errors.password}
          />
          <Button
            mt={"5px"}
            mb={["5px", "5px", "5px", "10px"]}
            w={"100%"}
            h={"35px"}
            bgColor={theme.colors.primary}
            color={theme.colors.white}
            type="submit"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <Heading
            mb={["5px", "5px", "5px", "10px"]}
            fontSize={"12px"}
            fontWeight={"700"}
          >
            Ainda não possui uma conta?
          </Heading>
          <Button
            mb={["5px", "5px", "5px", "10px"]}
            w={"100%"}
            h={"35px"}
            bgColor={theme.colors.gray[600]}
            color={theme.colors.gray[900]}
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={theme.colors.gray[900]}
            type="submit"
            onClick={registerRedirect}
          >
            Cadastre-se
          </Button>
        </form>
      </Flex>
    </>
  );
};
