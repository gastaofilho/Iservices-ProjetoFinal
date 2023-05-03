import { createContext, useState } from "react";
import { TJobRegisterValues } from "../components/JobRegisterForm/jobRegisterSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface IProfessionalDashboardProviderProps {
    children: React.ReactNode;
}

interface IProfessionalDashboardContext {
    jobList: IJob[];
    setJobList: React.Dispatch<React.SetStateAction<IJob[]>>;
    jobRegister: (
        formData: TJobRegisterValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => Promise<void>;
}

interface IJob {
    title: string;
    description: string;
    contact: string;
    category: string;
    id: number;
}

export const ProfessionalDashboardContext = createContext({} as IProfessionalDashboardContext);

export const ProfessionalDashboardProvider = ({ children }: IProfessionalDashboardProviderProps) => {
    const [jobList, setJobList] = useState<IJob[]>([]);

    const jobRegister = async (
        formData: TJobRegisterValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        try {
            setLoading(true);
            await api.post("/jobs", formData);
            toast.success("Serviço cadastrado com sucesso");
            
        } catch (error) {
            toast.error("Dados incorretos favor tentar novamente");
        } finally {
            setLoading(false);
        }
    };



    return (
        <ProfessionalDashboardContext.Provider value={{ jobRegister }}>
            {children}
        </ProfessionalDashboardContext.Provider>
    )
}