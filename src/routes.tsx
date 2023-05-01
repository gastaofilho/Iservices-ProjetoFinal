import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { ProfessionalDashboardPage } from "./pages/ProfessionalDashboardPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user_dashboard" element={<ProtectedRoutes />}>
        <Route index element={<UserDashboardPage />} />
      </Route>
      <Route path="/professional_dashboard" element={<ProtectedRoutes />}>
        <Route index element={<ProfessionalDashboardPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

