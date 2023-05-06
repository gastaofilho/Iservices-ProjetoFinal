import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TRegisterFormValues, registerFormSchema } from "./resgisterFormSchem";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "../Input";
import {
  Button,
  Flex,
  FormLabel,
  Heading,
  IconButton,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { theme } from "../../../styles/theme";
import React from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
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

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  return (
    <>
      <Flex
        flexDirection={"column"}
        w={"320px"}
        align={"center"}
        bgColor={theme.colors.secondary}
        px={"2.5%"}
        borderRadius={"8px"}
        justify={"center"}
      >
        <Heading
          fontSize={"24px"}
          fontWeight={"700"}
          color={theme.colors.white}
          mb={["0", "0", "0", "10px"]}
          mt={["0", "0", "0", "15px"]}
        >
          Registre-se
        </Heading>

        <form onSubmit={handleSubmit(submit)}>
          <FormInput
            h={"35px"}
            bgColor={theme.colors.gray[200]}
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("name")}
            error={errors?.name}
          />
          <FormInput
            h={"35px"}
            bgColor={theme.colors.gray[200]}
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("email")}
            error={errors.email}
          />

          <InputGroup>
            <FormInput
              label="Senha"
              h={"35px"}
              bgColor={theme.colors.gray[200]}
              pr="4rem"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
              {...register("password")}
              error={errors.password}
            />
            <InputRightElement width="2.5rem" pt={"2.7rem"}>
              <IconButton
                h="1.75rem"
                bgColor={theme.colors.gray[200]}
                color={theme.colors.gray[900]}
                aria-label="Call Segun"
                size="sm"
                onClick={handleClickPassword}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>

          <InputGroup>
            <FormInput
              label="Confirmar senha"
              h={"35px"}
              bgColor={theme.colors.gray[200]}
              pr="4rem"
              type={showConfirm ? "text" : "password"}
              placeholder="Redigite sua senha"
              _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
              {...register("confirm")}
              error={errors.confirm}
            />
            <InputRightElement width="2.5rem" pt={"2.7rem"}>
              <IconButton
                h="1.75rem"
                bgColor={theme.colors.gray[200]}
                color={theme.colors.gray[900]}
                aria-label="Call Segun"
                size="sm"
                onClick={handleClickConfirm}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>
          <FormInput
            h={"35px"}
            bgColor={theme.colors.gray[200]}
            label="CEP"
            type="text"
            placeholder="Digite seu CEP"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("zipcode")}
            error={errors.zipcode}
          />
          <FormLabel fontSize={"12px"} fontWeight={"700"}>
            Tipo de Usuário
          </FormLabel>
          <Select
            bgColor={theme.colors.gray[200]}
            color={theme.colors.gray[700]}
            w={"100%"}
            h={"35px"}
            mb={"10px"}
            {...register("userType")}
          >
            <option value="customer">Contratante</option>
            <option value="professional">Profissional</option>
          </Select>
          <Button
            w={"100%"}
            mb={"15px"}
            bgColor={theme.colors.primary}
            color={theme.colors.white}
            type="submit"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </Flex>
    </>
  );
};
