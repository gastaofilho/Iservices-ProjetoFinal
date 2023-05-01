import {
  Wrap,
  WrapItem,
  ListItem,
  UnorderedList,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { professionalList } from "../../pages/UserDashboardPage/ProfessionalList";
import { theme } from "../../styles/theme";

export const ProfessionalUlList = () => {
  return (
    <>
      <Flex
        w={"100%"}
        maxW={"1350px"}
        borderWidth={"1px"}
        borderStyle={"solid"}
        borderColor={"red"}
        // px={"2.5%"}
        
      >
        <UnorderedList 
        w={"100%"}
        // h={"65vh"}
        listStyleType={"none"}
        flexDirection={"row"}
        py={"20px"}
        
      >
        <Wrap spacing={"2.5%"} align="center" justify="center" >
          {professionalList.map((currentProfessional) => (
            <WrapItem>
              <ListItem
                key={currentProfessional.id}
                w={"260px"}
                maxW={"354px"}
                h={"298px"}
                bgColor={theme.colors.secondary}
                borderRadius={"8px"}
                px={"10px"}
                py={"10px"}
              >
                <Heading fontSize={"16px"}>
                  {currentProfessional.professionalName}
                </Heading>
                <Heading py={"20px"} fontSize={"14px"}>
                  {currentProfessional.professionalJob}
                </Heading>
                <Heading py={"20px"} pb={"40px"} fontSize={"12px"}>
                  {currentProfessional.professionalContactType}
                </Heading>
                <Button transition={".4s"} fontSize={"12px"}>Contatar</Button>
              </ListItem>
            </WrapItem>
          ))}
        </Wrap>
        </UnorderedList>
      </Flex>
    </>
  );
};
