import { Button, Flex } from "@chakra-ui/react";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Button
          w={"142px"}
          h={["36px", "48px"]}
          onClick={() => navigate("/")}
          bgColor={theme.colors.primary}
          textColor={theme.colors.white}
        >
          Voltar
        </Button>
      </Header>
      <Flex
        mt={["15px", "15px", "15px", "50px"]}
        direction={"column"}
        justifyContent={"center"}
        align={"center"}
      >
        <RegisterForm />
      </Flex>
    </>
  );
};
