import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useAuth } from "../auth/authContext";
import { SearchInput } from "../common/searchInput";
import { Enterprise } from "../types/enterprise";
import { EnterprisesItem } from "./enterpriseItem";

export function EnterprisesPage() {
  const [enterprises, setEnterprises] = useState<Enterprise[]>();
  const { user } = useAuth();

  async function getEnterprises() {
    const res = await api.get<Enterprise[]>("/enterprises");
    setEnterprises(res.data);
  }

  useEffect(() => {
    getEnterprises();
  }, []);

  // TODO replace this
  if (!enterprises) return <></>;

  return (
    <div className="items-center flex-1">
      <div className="sticky top-0 p-2 w-4/12">
        <SearchInput setData={setEnterprises} />
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
        {enterprises.map((enterprise) => {
          return (
            <EnterprisesItem enterprise={enterprise} key={enterprise.id} />
          );
        })}
        {user?.role === "coordinator" && (
          <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
            <Link to="/enterprises/create" className="button button-primary">
              Adicionar empresa
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
