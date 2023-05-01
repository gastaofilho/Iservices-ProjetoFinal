import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { UserBar } from "../../components/UserBar";
import { DivServices } from "../../components/DivServices";
import { ProfessionalUlList } from "../../components/ProfessionalUlList";

// interface IProfessional{
//   professionalName: string;
//   professionalJob: string;
//   professionalContactType: string;
//   id: number;
// }

export const UserDashboardPage = () => {

  return (
    <Flex w={"100%"} direction={"column"} alignItems={"center"}>
      <Header />
      <UserBar />
      <Main>
        <DivServices />
        <ProfessionalUlList />
      </Main>
    </Flex>
  );
};
