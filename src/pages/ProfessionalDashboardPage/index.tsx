import { Button, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { theme } from "../../styles/theme";
import { UserBar } from "../../components/UserBar/index";
import { Main } from "../../components/Main/index";
import { JobRegisterForm } from "../../components/JobRegisterForm/index";


export const ProfessionalDashboardPage = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <>
    <Header>
    <Button
        w={"142px"}
         h={["36px", "48px"]}
         onClick={() => userLogout()}
         bgColor={theme.colors.primary}
         color={theme.colors.white}
         >
          Sair
        </Button>
    </Header>
    <UserBar/>
    <Main>
      <Flex
        w={"100%"}
        h={"40px"}
        alignItems="center"
        justifyContent="flex-start"
        px={"5%"}
        bgColor={theme.colors.primary}
        color={theme.colors.white}
      >
        <Heading fontSize={["14px", "24px"]}>{`Cadastre seu serviço`}</Heading>
      </Flex>

      <JobRegisterForm/>
      <Flex
        w={"100%"}
        h={"40px"}
        alignItems="center"
        justifyContent="flex-start"
        px={"5%"}
        bgColor={theme.colors.primary}
        color={theme.colors.white}
      >
        <Heading fontSize={["14px", "24px"]}>{`Pessoas que entraram em contato`}</Heading>
      </Flex>
    </Main>
    </>
  );
};
