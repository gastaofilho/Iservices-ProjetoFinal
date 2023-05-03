import { Button } from "@chakra-ui/react";
import { Header } from "../../components/Header"
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { theme } from "../../styles/theme";

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
    <h1>Professional Dashboard Page</h1>
    </>
  );
};
