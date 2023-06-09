import { Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const UserBar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Flex
        w={"100%"}
        h="80px"
        maxW={"1350px"}
        alignItems="center"
        justifyContent="flex-start"
        fontWeight="700"
        px={"5%"}
      >
        <Heading
          fontSize={["16px", "24px"]}
        >{`Olá ${user?.name} de ${user?.userCity} estado de ${user?.userState}, seja bem-vindo!`}</Heading>
      </Flex>
    </>
  );
};
