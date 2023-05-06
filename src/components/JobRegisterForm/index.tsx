import { useForm, SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobRegisterSchema, TJobRegisterValues } from "./jobRegisterSchema";
import { ProfessionalDashboardContext } from "../../providers/ProfessionalDashboardContext";
import { Button, Flex, FormControl, Select } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { FormInput } from "../Form/Input";

export const JobRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { jobRegister } = useContext(ProfessionalDashboardContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TJobRegisterValues>({
    resolver: zodResolver(jobRegisterSchema),
  });

  const submit: SubmitHandler<TJobRegisterValues> = (formData) => {
    console.log(formData);
    jobRegister(formData, setLoading);
  };
  return (
    <Flex justify={"center"}>
      <Flex
        w={["320px", "50%"]}
        align={"left"}
        bgColor={theme.colors.secondary}
        px={"2.5%"}
        borderRadius={"8px"}
        justify={"center"}
        direction={"column"}
        py={"15px"}
        my={"10px"}
      >
        <form onSubmit={handleSubmit(submit)}>
          <FormInput
            mb={"15px"}
            type="text"
            label="Título"
            placeholder="Digite o título"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("title")}
            error={errors.title}
            bgColor={theme.colors.gray[200]}
            color={theme.colors.gray[700]}
            fontWeight={"700"}
          />
          <FormInput
            mb={"15px"}
            type="text"
            label="Descrição"
            placeholder="Descreva do seu serviço"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
            {...register("description")}
            error={errors.description}
            bgColor={theme.colors.gray[200]}
            color={theme.colors.gray[700]}
            fontWeight={"700"}
          />
          <FormInput
            mb={"15px"}
            type="text"
            label="Contato"
            placeholder="Contato"
            _placeholder={{ opacity: 1, color: theme.colors.gray[900] }}
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
            w={"100%"}
            h={["36px", "40px"]}
            bgColor={theme.colors.primary}
            textColor={theme.colors.white}
            type="submit"
            disabled={loading}
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
