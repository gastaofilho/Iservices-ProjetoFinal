import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IUserDashboardProviderProps{
    children: React.ReactNode;
}

interface IUserDashboardContext{
    professionalList: IProfessional[];
    setProfessionalList: React.Dispatch<React.SetStateAction<IProfessional[]>>;
}

interface IProfessional{
  professionalName: string;
  professionalJob: string;
  professionalContactType: string;
  id: number;
}

export const UserDashboardContext = createContext({} as IUserDashboardContext);

export const UserDashboardProvider = ({children}: IUserDashboardProviderProps) => {  
    const [professionalList, setProfessionalList] = useState<IProfessional[]>([])

    useEffect(() => {
        const loadProfessionalList = async () => {
          //const token = localStorage.getItem("@hamburgueria:TOKEN");
          try {
            
            // const { data } = await api.get<IProfessional[]>(`/products`, {
            //   headers: {
            //     Authorization: `Bearer ${token}`,
            //   },
            // });
            // setProfessionalList(data);
          } catch (error) {
            toast.error("Token inválido");
          }
        };
        loadProfessionalList();
      }, []);
    
        return(
            <UserDashboardContext.Provider value={{ professionalList, setProfessionalList  }}>
                {children}
            </UserDashboardContext.Provider>
        )
}