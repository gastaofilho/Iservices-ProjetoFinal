import { Flex, Heading } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const DivServices = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"40px"}
        alignItems="center"
        justifyContent="flex-start"
        px={"5%"}
        bgColor={theme.colors.primary}
        textColor={theme.colors.white}
      >
        <Heading fontSize={"24px"}>{`Serviços Disponíveis`}</Heading>
      </Flex>
    </>
  );
};
