import { professionalList } from "./ProfessionalList";
import logo from "../../assets/logo.png"

export const UserDashboardPage = () => {
  return (
    <>
      {/* add header */}
      <header>
        <img src={logo} alt="logotipo" />
        <button>Sair</button>
      </header>
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
