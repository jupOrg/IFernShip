import { useBackendErrorModal } from "./useBackendCheckModal";
import { AuthContextProvider } from "./auth/authContext";
import { Router } from "./routers/router";
import "./index.css";

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
