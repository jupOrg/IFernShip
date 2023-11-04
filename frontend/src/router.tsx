import "./index.css";

import { Navigate, createBrowserRouter } from "react-router-dom";
import { CreateInternshipPage } from "./internship/createInternshipPage";
import { internshipLoader } from "./internship/internshipLoader";
import { InternshipPage } from "./internship/internshipPage";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPageMd } from "./intro/IntroPageMd";

import { ChoicePersonMD } from "./choicePerson/choicePersonPage";
import { ChoicePersonSM } from "./choicePerson/choicePersonPageSm";

const choseVersion = (PageMd, PageSm) => {
  const width = window.innerWidth
  return width > 640 ? <PageMd /> : <PageSm />
}

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
    element: choseVersion(ChoicePersonMD, ChoicePersonSM),
  },
]);
