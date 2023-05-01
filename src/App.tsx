//import { UserDashboardPage } from "./pages/UserDashboardPage";
import { UserProvider } from "./providers/UserContext";
import { Router } from "./routes";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

export const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      {/* <UserDashboardPage /> */}
    <UserProvider>
      <Router />
    </UserProvider>
    </ChakraBaseProvider>
  );
};
