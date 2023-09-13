import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import { InternshipsPage } from "./internship/internshipsPage";
import { IntroPage } from "./intro/introPage";

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/internships",
    element: <InternshipsPage />,
  },
  {
    path: "/",
    element: <Navigate to="/intro"></Navigate>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
