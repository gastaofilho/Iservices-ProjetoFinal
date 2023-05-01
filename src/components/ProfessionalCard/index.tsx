import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

// interface IProfessional{
//   professionalName: string;
//   professionalJob: string;
//   professionalContactType: string;
//   id: number;
// }

export const ProfessionalCard = ({ currentProfessional }: any) => {
  return (
    <Flex
      h="40px"
      alignItems="center"
      justifyContent="center"
      textColor={theme.colors.branco}
    >
      <Flex>
        <Heading color="#FFFFFF" >
          {currentProfessional.professionalName}
        </Heading>
        <Text color="#FFFFFF">{currentProfessional.professionalJob}</Text>
        <Text color="#FFFFFF">{currentProfessional.professionalContactType}</Text>
        <Button bg="gray.400" >Contatar</Button>
      </Flex>
    </Flex>
  );
};
