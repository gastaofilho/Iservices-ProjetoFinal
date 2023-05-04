import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProfessionalDashboardProvider } from "../../providers/ProfessionalDashboardContext";
import { UserContext } from "../../providers/UserContext";
import { UserDashboardProvider } from "../../providers/UserDashboardContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <UserDashboardProvider>
      <ProfessionalDashboardProvider>
        <Outlet />
      </ProfessionalDashboardProvider>
    </UserDashboardProvider>

  ) : (
    <Navigate to="/" />
  );
};
