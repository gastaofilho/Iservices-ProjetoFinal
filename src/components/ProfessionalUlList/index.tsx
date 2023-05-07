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
  const { professionalList } = useContext(UserDashboardContext);
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
                <WrapItem key={currentProfessional.id}
                  display={"flex"}
                  flexDirection={"column"}
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
                  {currentProfessional.jobs?.map((job => {
                    return <Flex direction={"column"} gap={"20px"} key={job.id}>
                      <Heading fontSize={"14px"}>
                        {job.title}
                      </Heading>
                      <Heading fontSize={"14px"}>
                        {job.description}
                      </Heading>
                      <Heading fontSize={"14px"}>
                        {job.contact}
                      </Heading>
                      <Button transition={".4s"} fontSize={"12px"}>
                        Contatar
                      </Button>
                    </Flex>
                  }))}
                </WrapItem>
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
            Ainda não há profissionais cadastrados
          </Heading>
        </Flex>
      )}
    </>
  );
};
