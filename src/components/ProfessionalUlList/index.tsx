import {
  Wrap,
  WrapItem,
  ListItem,
  UnorderedList,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { useContext } from "react";
import { UserDashboardContext } from "../../providers/UserDashboardContext";

export const ProfessionalUlList = () => {
  const { professionalList, jobList, professionalData } = useContext(UserDashboardContext);
  return (
    <>
      {professionalList.length > 0 ? (
        <Flex
          w={"100%"}
          maxW={"1350px"}
          mx={"auto"}
        >
          <UnorderedList
            w={"100%"}
            listStyleType={"none"}
            flexDirection={"row"}
            py={"20px"}
            mx={"auto"}
          >
            <Wrap spacing={"2.5%"} align="center" justify="center">
              {professionalList.map((currentProfessional) => (
                <Flex key={currentProfessional.id}>
                  <ListItem 
                    w={"260px"}
                    maxW={"354px"}
                    h={"298px"}
                    bgColor={theme.colors.secondary}
                    borderRadius={"8px"}
                    px={"10px"}
                    py={"10px"}
                  >
                    <Heading fontSize={"16px"}>
                      {currentProfessional.name}
                    </Heading>
                    <Heading py={"20px"} fontSize={"14px"}>
                      {currentProfessional.userJob}
                    </Heading>
                    <Heading py={"20px"} pb={"40px"} fontSize={"12px"}>
                      {currentProfessional.contact}
                    </Heading>
                    
                    <Button transition={".4s"} fontSize={"12px"}>
                      Contatar
                    </Button>
                  </ListItem>
                </Flex>
              ))}
            </Wrap>
          </UnorderedList>
        </Flex>
      ) : (
        <Flex
        mt={"20px"}
        mx={"auto"}
          w={"auto"}
          maxW={"354px"}
          h={"298px"}
          bgColor={theme.colors.secondary}
          borderRadius={"8px"}
          px={"10px"}
          py={"10px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Heading fontSize={"16px"}>
            Ainda não há profissionais cadastradados
          </Heading>
        </Flex>
      )}
    </>
  );
};
