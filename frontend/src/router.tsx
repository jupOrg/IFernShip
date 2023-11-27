import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "./auth/authContext";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { RegisterPage } from "./auth/registerPage";
import { ChoiceAuthenticateMD } from "./choiceAuthenticate/choiceAuthenticatePage";
import { ChoiceAuthenticateSM } from "./choiceAuthenticate/choiceAuthenticatePageSm";
import { ChoicePersonMD } from "./choicePerson/choicePersonPage";
import { ChoicePersonSM } from "./choicePerson/choicePersonPageSm";
import { NotFoundPage } from "./common/notFoundPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
import { EnterprisesPage } from "./enterprise/enterprisesPage";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { SplashPage } from "./intro/splashPage";
import { RenderVersion } from "./renderVersion";

const publicRoutes = createBrowserRouter([
  {
    path: "/splash",
    element: <SplashPage />,
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
    path: "/",
    element: <Navigate to="/escolher-autenticacao" />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

const protectedRoutes = createBrowserRouter([
  {
    path: "/empresas",
    element: <EnterprisesPage />,
  },
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
  // TODO add login and sign up redirects
  {
    path: "/",
    element: <Navigate to="/estagios" />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export function Router() {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) return <SplashPage />;

  return <RouterProvider router={isLogged ? protectedRoutes : publicRoutes} />;
}
