import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "./auth/authContext";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { ChoicePersonMd } from "./choicePerson/choicePersonPage";
import "./index.css";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPage } from "./intro/introPage";
import { SplashPage } from "./intro/splashPage";

const publicRoutes = createBrowserRouter([
  {
    path: "/splash",
    element: <SplashPage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/entrar",
    element: <LoginPage />,
  },
  {
    path: "/recuperar-senha",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/entrar" />,
  },
]);

const protectedRoutes = createBrowserRouter([
  {
    path: "/estagios",
    element: <InternshipsPage />,
  },
  {
    path: "/estagios/criar",
    element: <CreateInternshipPage />,
  },
  {
    path: "/estagios/:id",
    element: <InternshipPage />,
  },
  {
    path: "/choice-person",
    element: <ChoicePersonMd />,
  },
  {
    path: "/*",
    element: <Navigate to="/estagios" />,
  },
]);

export function Router() {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) return <SplashPage />;

  return <RouterProvider router={isLogged ? protectedRoutes : publicRoutes} />;
}
