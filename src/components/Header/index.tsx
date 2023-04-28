import Logo from "../../assets/logo.png";
import { Button, Flex, Image } from "@chakra-ui/react";
import { HeaderStyle } from "./HeaderStyle";

export const Header = () => {
  return (
    <HeaderStyle>
    <Flex border='1px' borderColor='red' alignItems={"center"} justifyContent={"space-between"} p="0, 10%">
      
      <Image boxSize='70px' src={Logo} alt='Logotipo' />
      <Button colorScheme="blue">Sair</Button>
    </Flex>
    </HeaderStyle>
  );
};
