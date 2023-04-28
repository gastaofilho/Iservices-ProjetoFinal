import { createContext } from "react";

export const UserDashboardContext = createContext({});

export const UserDashboardProvider = ({children}:any) => {  
        return(
            <UserDashboardContext.Provider value={{ }}>
                {children}
            </UserDashboardContext.Provider>
        )
}