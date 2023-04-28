import { UserProvider } from "./providers/UserContext";
import { Router } from "./Route";

export const App = () => {

  return (

      <UserProvider>
        <Router />
      </UserProvider>

  );
}
