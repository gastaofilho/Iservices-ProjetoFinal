import { Button } from "@chakra-ui/react";
import { Header } from "../../components/Header"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { theme } from "../../styles/theme";
import { UserBar } from "../../components/UserBar/index";
import { Main } from "../../components/Main/index";
import { DivJobRegister } from "../../components/DivJobRegister/index";
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
         textColor={theme.colors.branco}
         >
          Sair
        </Button>
    </Header>
    <UserBar/>
    <Main>
      <DivJobRegister/>
      <JobRegisterForm/>
      <div>
        <h1>Pessoas que entraram em contato</h1>
      </div>
    </Main>
    </>
  );
};
