import { Navigate, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { internshipLoader } from "./internship/internshipLoader";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPage } from "./intro/introPage";

export const router = createBrowserRouter([
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/internships",
    element: <InternshipsPage />,
  },
  {
    path: "/internships/:id",
    loader: internshipLoader,
    element: <InternshipPage />,
  },
  {
    path: "/",
    element: <Navigate to="/intro"></Navigate>,
  },
]);
