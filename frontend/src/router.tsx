import { Navigate, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { internshipLoader } from "./internship/internshipLoader";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPageMd } from "./intro/IntroPageMd";

import { ChoicePersonMd } from "./choicePerson/choicePersonPage";

export const router = createBrowserRouter([
  {
    path: "/intro",
    element: <IntroPageMd />,
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
    path: "/",
    element: <Navigate to="/intro" />,
  },
  {
    path: "/choice-person",
    element: <ChoicePersonMd />,
  },
]);
