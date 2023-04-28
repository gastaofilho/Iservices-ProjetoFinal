import Logo from "../../assets/logo.png";
import { Button, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
    <Flex></Flex>
      <img src={Logo} alt="Logotipo" />
      <Button colorScheme="blue">Sair</Button>
    </>
  );
};
