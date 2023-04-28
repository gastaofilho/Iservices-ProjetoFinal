import { UserDashboardPage } from "./pages/UserDashboardPage";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

function App() {

  const theme = extendTheme({ colors })

  return (
    // <h1>Projeto Final</h1>
    <ChakraProvider theme={theme}>
      <UserDashboardPage />
    </ChakraProvider>
  );
}

export default App;
