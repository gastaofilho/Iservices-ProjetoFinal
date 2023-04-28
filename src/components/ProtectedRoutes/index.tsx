import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext, UserProvider } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <UserProvider>
      <Outlet />
    </UserProvider>
    
  ) : (
    <Navigate to="/" />
  );
};
