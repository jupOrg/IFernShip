import { useEffect, useState } from "react";
import { api } from "../api/api";
import { GradientCurve } from "../common/gradientCurve";
import { TopBar } from "../nav/topBar";
import { Enterprise } from "../types/enterprise";
import { EnterprisesItem } from "./enterpriseItem";

export function EnterprisesPage() {
  const [enterprises, setEnterprises] = useState<Enterprise[]>();

  async function getEnterprises() {
    const res = await api.get<Enterprise[]>("/enterprises");
    setEnterprises(res.data);
  }

  useEffect(() => {
    getEnterprises();
  }, []);

  // TODO replace this
  if (!enterprises) return <div>loading</div>;

  return (
    <div className="flex flex-row">
      {/* <NavBar /> */}
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
