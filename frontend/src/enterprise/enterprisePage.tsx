import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { Enterprise } from "../types/enterprise";

export function EnterprisePage() {
  const { id } = useParams();
  const [enterprise, setEnterprise] = useState<Enterprise>();

  async function getEnterprise() {
    const res = await api.get("/enterprise/" + id);
    setEnterprise(res.data);
  }

  useEffect(() => {
    getEnterprise();
  }, []);

  if (!enterprise) {
    return <LoadingPlaceholder />;
  }

  return (
    <div>
      <h1>{enterprise.name}</h1>
    </div>
  );
}
