import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IUserDashboardProviderProps {
  children: React.ReactNode;
}

interface IUserDashboardContext {
  professionalList: IProfessional[];
  setProfessionalList: React.Dispatch<React.SetStateAction<IProfessional[]>>;
  jobList: IJob[];
  setJobList: React.Dispatch<React.SetStateAction<IJob[]>>;
  professionalData: IProfessionalData[];
  loadJobList: any;
}

interface IProfessionalData extends IJob, IProfessional {
  name: string;
  userType: string;
  userJob: string;
  title: string;
  description: string;
  contact: string;
  category: string;
  id: number;
}

interface IJob {
  title: string;
  description: string;
  contact: string;
  category: string;
  id: number;
}

interface IProfessional {
  name: string;
  userType: string;
  userJob: string;
  contact: string;
  id: number;
}

export const UserDashboardContext = createContext({} as IUserDashboardContext);

export const UserDashboardProvider = ({ children }: IUserDashboardProviderProps) => {
  const [professionalList, setProfessionalList] = useState<IProfessional[]>([])
  const [jobList, setJobList] = useState<IJob[]>([])
  const [professionalData, setProfessionalData] = useState<IProfessionalData[]>([])
  
  const loadJobList = async (userId:any) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await api.get<IJob[]>(`/jobs/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobList(data);
    } catch (error) {
      toast.error("Token inválido");
    }
  };

  useEffect(() => {
    const loadProfessionalList = async () => {
      const token = localStorage.getItem("@TOKEN");
      try {
        const { data } = await api.get<IProfessional[]>(`/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setProfessionalList(data.filter((professional) => professional.userType === "professional"));
        
        
        professionalList.map((professional) => (loadJobList(professional.id)))
      } catch (error) {
        toast.error("Token inválido");
      }
    };
    loadProfessionalList();
  }, []);

  return (
    <UserDashboardContext.Provider value={{ professionalList, setProfessionalList, jobList, setJobList, professionalData, loadJobList }}>
      {children}
    </UserDashboardContext.Provider>
  )
}