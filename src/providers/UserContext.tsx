import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../components/Form/RegisterForm/resgisterFormSchem";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";

interface IUserProviderProps{
    children: React.ReactNode;
}

interface IUserContext{
    userLogin: (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    userRegister: (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    user: IUser | null;
    userLogout: () => void;
}

interface IUser{
    email: string;
    name: string;
    id: number;
}

interface IUserLoginResponse{
    accessToken: string;
    user: IUser;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    const userLogin = async (formData: TLoginFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            setLoading(true);
            const response = await api.post<IUserLoginResponse>("/login", formData)
            localStorage.setItem("@TOKEN", response.data.accessToken)
            localStorage.setItem("@USER", JSON.stringify(response.data.user))
            setUser(response.data.user)
            navigate("/costumer")
            toast.success("Login realizado com sucesso")
        } catch (error) {
            console.log(error);    
            toast.error("Dados incorretos ou não cadastrados")       
        }
        finally{
            setLoading(false);
        }
    }
    const userRegister = async (formData: TRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
           setLoading(true);
           await api.post("/users", formData)
           toast.success("Cadastro realizado com sucesso")
           navigate("/")
        } catch (error) {
            console.log(error);
            toast.error("Dados incorretos favor tentar novamente")       
        }
        finally{
            setLoading(false);
        }
    }
    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USER");
        setUser(null);
        navigate("/")
    }
     
    return(
        <UserContext.Provider value={{ userLogin, userRegister, user, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}