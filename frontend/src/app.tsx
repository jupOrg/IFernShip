import { AuthContextProvider } from "./auth/authContext";
import "./index.css";
import { Router } from "./router";

export function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}
