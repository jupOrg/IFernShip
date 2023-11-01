import { Navigate, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { internshipLoader } from "./internship/internshipLoader";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPage } from "./intro/introPage";

export const router = createBrowserRouter([
  {
    path: "/introducao",
    element: <IntroPage />,
  },
  {
    path: "/estagios",
    element: <InternshipsPage />,
  },
  {
    path: "/estagio/criar",
    element: <CreateInternshipPage />,
  },
  {
    path: "/estagio/:id",
    loader: internshipLoader,
    element: <InternshipPage />,
  },
  {
    path: "/",
    element: <Navigate to="/introducao"></Navigate>,
  },
]);
