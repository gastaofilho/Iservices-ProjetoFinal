import Logo from "../../assets/logo.png";
import { Flex, Image } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

interface IButton {
  children: React.ReactNode;
}

export const Header = ({ children }: IButton) => {
  return (
    <>
      <Flex
        width={"100%"}
        mx={"auto"}
        h={"80px"}
        maxW={"1350px"}
        alignItems="center"
        justifyContent={"space-between"}
        px="5%"
        borderBottomWidth={"1px"}
        borderBottomStyle={"solid"}
        borderBottomColor={theme.colors.gray[300]}
      >
        <Image boxSize={["40px", "40px", "70px"]} src={Logo} alt="Logotipo" />
        {children}
      </Flex>
    </>
  );
};
