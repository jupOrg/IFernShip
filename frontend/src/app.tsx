import { RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./auth/authContext";
import "./index.css";
import { router } from "./router";

export function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
