import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IUserDashboardProviderProps {
  children: React.ReactNode;
}

interface IUserDashboardContext {
  professionalList: IProfessional[];
  setProfessionalList: React.Dispatch<React.SetStateAction<IProfessional[]>>;
}

interface IJob {
  title: string;
  description: string;
  contact: string;
  category: string;
  id: number;
  userId: string;
}

interface IProfessional {
  name: string;
  city: string;
  userType: string;
  userJob: string;
  contact: string;
  id: number;
  jobs?: IJob[];
}

export const UserDashboardContext = createContext({} as IUserDashboardContext);

export const UserDashboardProvider = ({ children }: IUserDashboardProviderProps) => {
  const [professionalList, setProfessionalList] = useState<IProfessional[]>([])

  useEffect(() => {
    const loadProfessionalList = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get<IProfessional[]>(`/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            _embed: "jobs"
          }
        });
        const userCity = localStorage.getItem("@CITY")
        setProfessionalList(data.filter((professional) => professional.userType === "professional" && professional.city === userCity));
      } catch (error) {
        toast.error("Token inválido");
      }
    };
    loadProfessionalList();
  }, []);

  return (
    <UserDashboardContext.Provider value={{ professionalList, setProfessionalList }}>
      {children}
    </UserDashboardContext.Provider>
  )
}