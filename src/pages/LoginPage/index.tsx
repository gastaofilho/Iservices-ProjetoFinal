import { LoginForm } from "../../components/Form/LoginForm";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay, A11y } from 'swiper';
import Tools from "../../assets/BlackTools.svg";
import Conserto from "../../assets/conserto.svg";
import Iservices from "../../assets/IServices.svg";
import Apresentacao from "../../assets/Apresentacao.svg";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { StyledDiv } from "./StyleLoginPage";
import { Flex } from "@chakra-ui/react";

export const LoginPage = () => {


  return (
    <>
      <Header>
      </Header>
      <LoginForm /> 
      <Flex 
      justifyContent={"center"}
      align={"center"}
      >
        <StyledDiv>
          <Swiper
          modules={[Navigation, Mousewheel, Pagination, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{}}
          >
            <SwiperSlide><img src={Iservices} /></SwiperSlide>
            <SwiperSlide><img src={Tools} /></SwiperSlide>
            <SwiperSlide><img src={Conserto} /></SwiperSlide>
            <SwiperSlide><img src={Apresentacao} /></SwiperSlide>
          </Swiper>
        </StyledDiv>
      </Flex>
    </>
  );
};