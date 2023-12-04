import { useEffect, useState } from "react";
import { createApiInstance } from "../api/api";
import { GradientCurve } from "../common/gradientCurve";
import { NavBar } from "../nav/navBar";
import { TopBar } from "../nav/topBar";
import { Enterprise } from "../types/enterprise";
import { EnterprisesItem } from "./enterpriseItem";
import { useAuth } from "../auth/authContext";
import { SplashPage } from "../intro/splashPage";

export function EnterprisesPage() {
  const [enterprises, setEnterprises] = useState<Enterprise[]>();

  const { token } = useAuth();
  const api = createApiInstance(token);

  async function getEnterprises() {
    const res = await api.get<Enterprise[]>("/enterprise");
    setEnterprises(res.data);
  }

  useEffect(() => {
    getEnterprises();
  }, []);

  // TODO replace this
  if (!enterprises) return <SplashPage />;

  return (
    <div className="flex flex-row min-h-screen">
      <NavBar />
      <div className="items-center p-2 gap-4 flex-1">
        <TopBar />
        <GradientCurve />
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
          {enterprises.map((enterprise) => {
            return (
              <EnterprisesItem enterprise={enterprise} key={enterprise.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
