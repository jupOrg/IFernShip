import { AuthContextProvider } from "./auth/authContext";
import "./index.css";
import { Router } from "./router";
import { useBackendErrorModal } from "./useBackendCheckModal";

export function App() {
  const { BackendErrorModal } = useBackendErrorModal();

  return (
    <>
      <BackendErrorModal />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}
