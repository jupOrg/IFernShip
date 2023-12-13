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
import { GradientCurve } from "./common/gradientCurve";
import { NotFoundPage } from "./common/notFoundPage";
import { DevPage } from "./dev/devPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
import { EnterprisePage } from "./enterprise/enterprisePage";
import { EnterprisesPage } from "./enterprise/enterprisesPage";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { SplashPage } from "./intro/splashPage";
import { BottomNavBar } from "./nav/bottomNavBar";
import { NavBar } from "./nav/navBar";
import { RenderVersion } from "./renderVersion";

const publicRoutes = createBrowserRouter([
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

function LayoutProtectPages() {
  return (
    <div className="flex sm:flex-row flex-1 w-full">
      <NavBar />
      <GradientCurve />
      <Outlet />
      <BottomNavBar />
    </div>
  );
}

const protectedRoutes = createBrowserRouter([
  {
    path: "/dev",
    element: <DevPage />,
  },
  {
    element: <LayoutProtectPages />,
    loader: SplashPage,
    children: [
      {
        path: "/empresas",
        element: <EnterprisesPage />,
      },
      {
        path: "/estagios",
        element: <InternshipsPage />,
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
        path: "/empresas/:id",
        element: <EnterprisePage />,
      },
      {
        path: "/estagios/:id",
        element: <InternshipPage />,
      },
      {
        path: "/conta/editar",
        element: <UserPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/" />,
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
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return <SplashPage />;
  }

  return (
    <RouterProvider
      router={isLogged ? protectedRoutes : publicRoutes}
      fallbackElement={<SplashPage />}
    />
  );
}
