import { Navigate, createBrowserRouter } from "react-router-dom";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { ChoicePersonMd } from "./choicePerson/choicePersonPage";
import "./index.css";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { internshipLoader } from "./internship/internshipLoader";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPage } from "./intro/introPage";
import { SplashPage } from "./intro/splashPage";

export const router = createBrowserRouter([
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
    path: "/estagios",
    element: <InternshipsPage />,
  },
  {
    path: "/estagios/criar",
    element: <CreateInternshipPage />,
  },
  {
    path: "/estagios/:id",
    loader: internshipLoader,
    element: <InternshipPage />,
  },
  {
    path: "/choice-person",
    element: <ChoicePersonMd />,
  },
  {
    path: "/",
    element: <Navigate to="/estagios" />,
  },
]);
