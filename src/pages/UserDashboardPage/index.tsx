import { Button, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { UserBar } from "../../components/UserBar";
import { ProfessionalUlList } from "../../components/ProfessionalUlList";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { theme } from "../../styles/theme";

export const UserDashboardPage = () => {
  const { userLogout } = useContext(UserContext);
  return (
    <Flex w={"100%"} direction={"column"} alignItems={"center"}>
      <Header>
      <Button
        w={"142px"}
         h={["36px", "48px"]}
         onClick={() => userLogout()}
         bgColor={theme.colors.primary}
         textColor={theme.colors.branco}
         >
          Sair
        </Button>
      </Header>
      <UserBar />
      <Main>
      <Flex
        w={"100%"}
        h={"40px"}
        alignItems="center"
        justifyContent="flex-start"
        px={"5%"}
        bgColor={theme.colors.primary}
        textColor={theme.colors.branco}
      >
        <Heading fontSize={"24px"}>{`Serviços Disponíveis`}</Heading>
      </Flex>

        <ProfessionalUlList />
      </Main>
    </Flex>
  );
};
