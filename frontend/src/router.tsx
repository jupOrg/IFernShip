import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "./auth/authContext";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { ChoicePersonMd } from "./choicePerson/choicePersonPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
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
  // TODO create a 404 page instead of this
  {
    path: "/*",
    element: <Navigate to="/entrar" />,
  },
]);

const protectedRoutes = createBrowserRouter([
  {
    path: "/empresas/criar",
    element: <CreateEnterprisePage />,
  },
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
  // TODO create a 404 page instead of this
  // TODO add login and sign up redirects
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
