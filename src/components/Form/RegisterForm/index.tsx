import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TRegisterFormValues, registerFormSchema } from "./resgisterFormSchem";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../../../styles/button";
import { Flex, FormControl } from "@chakra-ui/react";
import { StyledFieldset } from "../../../styles/fieldset";
import { StyledSelect } from "../../../styles/select";
import { StyledInput } from "../../../styles/input";

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
        <FormControl onSubmit={handleSubmit(submit)}>
          <StyledFieldset>
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
            <StyledButton type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </StyledButton>
          </StyledFieldset>
        </FormControl>
      </Flex>
    </Flex>
  );
};
