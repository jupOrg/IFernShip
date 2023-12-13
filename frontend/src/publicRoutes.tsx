import { Navigate, createBrowserRouter } from "react-router-dom";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { RegisterPage } from "./auth/signUpPage";
import { ChoiceAuthenticateMD } from "./choiceAuthenticate/choiceAuthenticatePage";
import { ChoiceAuthenticateSM } from "./choiceAuthenticate/choiceAuthenticatePageSm";
import { ChoicePersonMD } from "./choicePerson/choicePersonPage";
import { ChoicePersonSM } from "./choicePerson/choicePersonPageSm";
import { DevPage } from "./dev/devPage";
import { RenderVersion } from "./renderVersion";

export const publicRoutes = createBrowserRouter([
  {
    path: "/dev",
    element: <DevPage />,
  },
  {
    path: "/entrar",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <RegisterPage />,
  },
  {
    path: "/recuperar-senha",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/escolher-autenticacao",
    element: (
      <RenderVersion
        PageMd={<ChoiceAuthenticateMD />}
        PageSm={<ChoiceAuthenticateSM />}
      />
    ),
  },
  {
    path: "/escolher-pessoa",
    element: (
      <RenderVersion PageMd={<ChoicePersonMD />} PageSm={<ChoicePersonSM />} />
    ),
  },
  {
    path: "/*",
    element: <Navigate to="/escolher-autenticacao" />,
  },
]);
