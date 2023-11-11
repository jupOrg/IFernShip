import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "./auth/authContext";
import { ForgotPasswordPage } from "./auth/forgotPasswordPage";
import { LoginPage } from "./auth/loginPage";
import { NotFoundPage } from "./common/notFoundPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
import { EnterprisesPage } from "./enterprise/enterprisesPage";
import "./index.css";

import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { SplashPage } from "./intro/splashPage";

import { ChoicePersonMD } from "./choicePerson/choicePersonPage";
import { ChoicePersonSM } from "./choicePerson/choicePersonPageSm";
import { useEffect, useState } from "react";

type RenderVersionProps = {
  PageMd: React.ComponentType;
  PageSm: React.ComponentType;
};

function RenderVersion({ PageMd, PageSm }: RenderVersionProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return width > 640 ? <PageMd /> : <PageSm />;
}

export const publicRoutes = createBrowserRouter([
  {
    path: "/splash",
    element: <SplashPage />,
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
    path: "/",
    element: <Navigate to="/estagios" />,
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
  {
    path: "/choice-person",
    element: <RenderVersion PageMd={ChoicePersonMD} PageSm={ChoicePersonSM} />,
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
