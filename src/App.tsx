import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from "./providers/UserContext";
import Router from './routes';

export const App = () => {

  return (
    <ChakraProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </ChakraProvider>
  );
}


