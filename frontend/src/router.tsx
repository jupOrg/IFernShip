import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "./auth/authContext";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { RegisterPage } from "./auth/signUpPage";
import { UserPage } from "./auth/userPage";
import { ChoiceAuthenticateMD } from "./choiceAuthenticate/choiceAuthenticatePage";
import { ChoiceAuthenticateSM } from "./choiceAuthenticate/choiceAuthenticatePageSm";
import { ChoicePersonMD } from "./choicePerson/choicePersonPage";
import { ChoicePersonSM } from "./choicePerson/choicePersonPageSm";
import { NotFoundPage } from "./common/notFoundPage";
import { DevPage } from "./dev/devPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
import { EnterprisesPage } from "./enterprise/enterprisesPage";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { SplashPage } from "./intro/splashPage";
import { RenderVersion } from "./renderVersion";

import { GradientCurve } from "./common/gradientCurve";
import { EnterprisePage } from "./enterprise/enterprisePage";
import { NavBar } from "./nav/navBar";
import { TopBar } from "./nav/topBar";

const publicRoutes = createBrowserRouter([
  {
    path: "/dev",
    element: <DevPage />,
  },
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

const LayouProtectPages = () => {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <NavBar />
      <GradientCurve />
      <Outlet />
    </div>
  );
};

const LayouProtectPagesRoot = () => {
  return (
    <div className="items-center p-2 gap-4 flex-1">
      <TopBar />
      <Outlet />
    </div>
  );
};

const protectedRoutes = createBrowserRouter([
  {
    element: <LayouProtectPages />,
    loader: SplashPage,
    children: [
      {
        element: <LayouProtectPagesRoot />,
        children: [
          {
            path: "/empresas",
            element: <EnterprisesPage />,
          },
          {
            path: "/empresas/:id",
            element: <EnterprisePage />,
          },
          {
            path: "/estagios",
            element: <InternshipsPage />,
          },
        ],
      },
      {
        path: "/empresas/criar",
        element: <CreateEnterprisePage />,
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
        path: "/user/editar",
        element: <UserPage />,
      },
    ],
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
  const { isLogged } = useAuth();
  return (
    <RouterProvider
      router={isLogged ? protectedRoutes : publicRoutes}
      fallbackElement={<SplashPage />}
    />
  );
}
