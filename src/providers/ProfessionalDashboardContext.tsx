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
  jobUpdate: (
    formData: TJobRegisterValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

export const ProfessionalDashboardContext = createContext(
  {} as IProfessionalDashboardContext
);

export const ProfessionalDashboardProvider = ({
  children,
}: IProfessionalDashboardProviderProps) => {

  const jobRegister = async (
    formData: TJobRegisterValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const newFormData = { ...formData, userId: Number(userId) };

    try {
      setLoading(true);
      const { data } = await api.post("/jobs", newFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos favor tentar novamente");
    } finally {
      setLoading(false);
    }
  };

  const jobUpdate = async (
    formData: TJobRegisterValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const newFormData = { ...formData, userId: Number(userId) };

    try {
      setLoading(true);
      const { data } = await api.put("/jobs", newFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Serviço cadastrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos favor tentar novamente");
    } finally {
      setLoading(false);
    }
  };



  return (
    <ProfessionalDashboardContext.Provider value={{ jobRegister, jobUpdate }}>
      {children}
    </ProfessionalDashboardContext.Provider>
  );
};
