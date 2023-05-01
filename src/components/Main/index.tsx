import { Flex } from "@chakra-ui/react";

interface IMainProps{
  children: React.ReactNode;
}

export const Main = ({children}: IMainProps) => {
  return (
    <>
    <Flex
      as={"main"}
      w={"100%"}
      maxW={"1340px"}
      px="5%"
      direction={"column"}
    >
      {children}
    </Flex>
    </>
  );
};
