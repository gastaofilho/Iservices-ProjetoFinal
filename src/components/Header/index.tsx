import Logo from "../../assets/logo.png";
import { Flex, Image } from "@chakra-ui/react";
import { ButtonStyle } from "../Button/buttonStyle";
import { theme } from "../../styles/theme";

export const Header = () => {
  return (
    <>
      <Flex width={"100%"} mx={"auto"} h={"80px"} maxW={"1350px"} alignItems="center" justifyContent={"space-between"} px="5%" borderBottomWidth={"1px"} borderBottomStyle={"solid"} borderBottomColor={theme.colors.gray[300]}>
        <Image boxSize={["40px", "40px","70px"]} src={Logo} alt="Logotipo" />
        <ButtonStyle h={["36px","48px"]}>Sair</ButtonStyle>
      </Flex>
    </>
  );
};
