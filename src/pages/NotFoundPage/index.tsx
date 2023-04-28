import { StyledNotFound } from "./notFound";
import imgNotFound from "../../assets/not_found.png";

export const NotFoundPage = () => {
  return (
    <>
      <StyledNotFound>
        <h1>Error 404</h1>
        <img src={imgNotFound} alt="página não encontrada" />
        <h2>Sorry, Page Not Found</h2>
        <h3>Lamentamos, mas a página que você procura não foi encontrada</h3>
      </StyledNotFound>
    </>
  );
};
