import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../components/Form/RegisterForm/resgisterFormSchem";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { apiViaCep } from "../services/viaCep";


interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  user: IUser | null;
  userLogout: () => void;
  //currentJob: ICurrentJob | null;
  //currentJob: ICurrentJob;
  currentJob: ICurrentJob[];
  //setCurrentJob: React.Dispatch<React.SetStateAction<ICurrentJob | null>>;
  //setCurrentJob?: ICurrentJob[];
  setCurrentJob?: React.Dispatch<React.SetStateAction<ICurrentJob>>
  
}

interface IUser {
  email: string;
  name: string;
  id: number;
  userType: string;
  zipcode: string;
  userCity: string;
  userState: string;
  //jobs?: ICurrentJob | null;
  jobs?: ICurrentJob;
}

interface ICurrentJob {
  title: string;
  description: string;
  contact: string;
  category: string;
  id: number;
  userId: number;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [currentJob, setCurrentJob] = useState<ICurrentJob[]>([])
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    // const userJob = localStorage.getItem("@USERJOB");
    const userAutoLogin = async () => {
      try {
        const { data } = await api.get<IUser>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            _embed: "jobs"
          }
        });
        localStorage.setItem("@USERJOB", JSON.stringify(data.jobs));
        setUser(data);
        if (data.userType==="customer"){
          navigate("/user_dashboard");
        }else if(data.userType==="professional"){
          navigate("/professional_dashboard");
          const userJob = localStorage.getItem("@USERJOB") ;
          {data.jobs ?
            //setCurrentJob(data.jobs)
            setCurrentJob([])
            : setCurrentJob([])
          }
        }
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
      }
    };

    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      localStorage.setItem("@CITY", data.user.userCity);
      setUser(data.user);
      if (data.user.userType==="customer"){
        navigate("/user_dashboard");
      }else if(data.user.userType==="professional"){
        navigate("/professional_dashboard");
      }
      toast.success("Login realizado com sucesso");
    } catch (error) {
      toast.error("Dados incorretos ou não cadastrados");
    } finally {
      setLoading(false);
    }
  };
  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const str = formData.zipcode.split("-").join("");
    const response = await apiViaCep.get(`/${str}/json`);
    const cityName = response.data.localidade
    const stateName = response.data.uf
    const newFormData = {name: formData.name, email: formData.email, password: formData.password, zipcode: formData.zipcode, userCity: cityName, userState: stateName, userType: formData.userType}
    try {
      setLoading(true);
      await api.post("/users", newFormData);
      toast.success("Cadastro realizado com sucesso");
      navigate("/")
    } catch (error) {
      toast.error("Dados incorretos favor tentar novamente");
    } finally {
      setLoading(false);
    }
  };
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERJOB") ;
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, user, userLogout, currentJob }}>
      {children}
    </UserContext.Provider>
  );
};
