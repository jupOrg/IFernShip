import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { useModal } from "../common/useModal";
import { useResource } from "../common/useResource";
import { Enterprise } from "../types/enterprise";
import { EnterpriseForm } from "./enterpriseForm";

type FieldValues = Omit<Enterprise, "picture" | "id">;

export function UpdateEnterprisePage() {
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();
  const { id } = useParams();
  const enterprise = useResource<Enterprise>("/enterprises/" + id);

  async function submit(fields: FieldValues) {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await api.post("/enterprises", formData);
    openModal();
  }

  if (!enterprise) {
    return <LoadingPlaceholder />;
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6 ">
        <h1 className="page-header">
          <GoBackArrow to="/internships" />
          Editar empresa
        </h1>
        <EnterpriseForm submit={submit} enterprise={enterprise} />
      </div>
      <Modal
        title="Empresa registrada com Sucesso"
        callbackClose={() => {
          navigate("/enterprises");
        }}
      />
    </div>
  );
}
