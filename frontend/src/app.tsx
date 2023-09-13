import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import { IntroPage } from "./intro/introPage";

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/",
    element: <Navigate to="/intro"></Navigate>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
