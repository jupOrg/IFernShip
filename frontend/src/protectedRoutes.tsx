import { Navigate, createBrowserRouter } from "react-router-dom";
import { UserPage } from "./auth/userPage";
import { NotFoundPage } from "./common/notFoundPage";
import { DevPage } from "./dev/devPage";
import { CreateEnterprisePage } from "./enterprise/createEnterprisePage";
import { EnterprisePage } from "./enterprise/enterprisePage";
import { EnterprisesPage } from "./enterprise/enterprisesPage";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { SplashPage } from "./intro/splashPage";
import { LayoutProtectPages } from "./layoutProtectPages";

export const protectedRoutes = createBrowserRouter([
  {
    element: <LayoutProtectPages />,
    loader: SplashPage,
    children: [
      // internship
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
      // enterprise
      {
        path: "/empresas",
        element: <EnterprisesPage />,
      },
      {
        path: "/empresas/criar",
        element: <CreateEnterprisePage />,
      },
      {
        path: "/empresas/:id",
        element: <EnterprisePage />,
      },
      // user
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
  {
    path: "/dev",
    element: <DevPage />,
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
