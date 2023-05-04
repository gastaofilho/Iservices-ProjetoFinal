import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobRegisterSchema, TJobRegisterValues } from "./jobRegisterSchema";
import { Button, Flex, FormControl, Select } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { FormInput } from "../Form/Input";


export const JobRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TJobRegisterValues>({
    resolver: zodResolver(jobRegisterSchema),
  });

  const submit: SubmitHandler<TJobRegisterValues> = (formData) => {
    console.log(formData);
  };
  return (
    <Flex justify={"center"}>
    <Flex
      direction={"column"}
      w={["100%", "50%"]}
      h={"300px"}
      justify={"center"}
      borderWidth={"1px"}
      borderStyle={"solid"}
      borderColor={"red"}
    >
      <FormControl w={["100%", "300px"]} onSubmit={handleSubmit(submit)}>
        <FormInput
          mb={"15px"}
          type="text"
          placeholder="Digite o título"
          {...register("title")}
          error={errors.title}
          bgColor={theme.colors.gray[200]}
          color={theme.colors.gray[700]}
          fontWeight={"700"}
        />
        <FormInput
          mb={"15px"}
          type="text"
          placeholder="Descreva do seu serviço"
          {...register("description")}
          error={errors.description}
          bgColor={theme.colors.gray[200]}
          color={theme.colors.gray[700]}
          fontWeight={"700"}
        />
        <FormInput
          mb={"15px"}
          type="text"
          placeholder="Contato"
          {...register("contact")}
          error={errors.contact}
          bgColor={theme.colors.gray[200]}
          color={theme.colors.gray[700]}
          fontWeight={"700"}
        />
        <Flex>
          <Select
           mb={"15px"} 
           {...register("jobCategory")}
           bgColor={theme.colors.gray[200]}
           color={theme.colors.gray[700]}
           fontWeight={"700"}
          >
            <option value="">Selecione o tipo de serviço</option>
            <option value="diarista">Diarista</option>
            <option value="pintor">Pintor</option>
            <option value="pedreiro">Pedreiro</option>
            <option value="eletricista">Eletricista</option>
            <option value="encanador">Encanador</option>
            <option value="all">Serviços Gerais</option>
          </Select>
        </Flex>
        <Button
          w={["100%", "300px"]}
          h={["36px", "40px"]}
          bgColor={theme.colors.primary}
          textColor={theme.colors.branco}
          type="submit"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </FormControl>
    </Flex>
    </Flex>
  );
};
