import { professionalList } from "./ProfessionalList";
import { Header } from "../../components/Header";

export const UserDashboardPage = () => {

  return (
    <>
      <Header />
      <h1>Profissionais Disponíveis</h1>
      <ul>
        {professionalList.map((currentProfessional) => (
          <li key={currentProfessional.id}>
            <h2>{currentProfessional.professionalName}</h2>
            <p>{currentProfessional.professionalJob}</p>
            <h3>{currentProfessional.professionalContactType}</h3>
            <button>Contatar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
