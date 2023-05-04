import { createContext, useState } from "react";
import { TJobRegisterValues } from "../components/JobRegisterForm/jobRegisterSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface IProfessionalDashboardProviderProps {
    children: React.ReactNode;
}

interface IProfessionalDashboardContext {
    jobRegister: (
        formData: TJobRegisterValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => Promise<void>;
}


export const ProfessionalDashboardContext = createContext({} as IProfessionalDashboardContext);

export const ProfessionalDashboardProvider = ({ children }: IProfessionalDashboardProviderProps) => {
    const jobRegister = async (
        formData: TJobRegisterValues,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        const token = localStorage.getItem("@TOKEN");
        const UserId = localStorage.getItem("@USERID");

        const newFormData = {...formData, UserId}

        console.log(newFormData)

        try {
            setLoading(true);
            await api.post("/jobs", newFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Serviço cadastrado com sucesso");

        } catch (error) {
            console.log(error)
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