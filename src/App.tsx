import { UserDashboardPage } from "./pages/UserDashboardPage";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


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
