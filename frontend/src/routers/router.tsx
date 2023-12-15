import { RouterProvider } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { SplashPage } from "../intro/splashPage";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

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
