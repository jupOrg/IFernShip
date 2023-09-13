import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { IntroPage } from "./intro/introPage";

const router = createBrowserRouter([
  {
    path: "/intro",
    element: <IntroPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
