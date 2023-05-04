import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TRegisterFormValues, registerFormSchema } from "./resgisterFormSchem";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex } from "@chakra-ui/react";
import { StyledSelect } from "../../../styles/select";
import { StyledInput } from "../../../styles/input";
import { theme } from "../../../styles/theme";

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
    <Flex
    width={"100vw"}
    height={"80vh"}
    justifyContent={"center"}
    alignItems={"center"}
    >
      <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mx={"auto"}
      >
        <form onSubmit={handleSubmit(submit)}>
          <Flex
          width={"24rem"}
          height={"8rem"}
          direction={"column"}
          justifyContent={"center"}
          gap={"10px"}
          >
            <StyledInput
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
              disabled={loading}
              error={errors.name}
            />
            <StyledInput
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
              disabled={loading}
              error={errors.email}
            />
            <StyledInput
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              disabled={loading}
              error={errors.password}
            />
            <StyledInput
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirm")}
              disabled={loading}
              error={errors.confirm}
            />
            <StyledInput
              type="text"
              placeholder="Digite seu código"
              {...register("zipcode")}
              disabled={loading}
              error={errors.zipcode}
            />
            <StyledSelect {...register("userType")}>
              <option value="customer">Contratante</option>
              <option value="professional">Profissional</option>
            </StyledSelect>
          </Flex>
            <Button
            width={"24rem"}
            height={"2rem"}
            mt={"5rem"}
            bgColor={theme.colors.primary}
            type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
        </form>
      </Flex>
    </Flex>
  );
};
