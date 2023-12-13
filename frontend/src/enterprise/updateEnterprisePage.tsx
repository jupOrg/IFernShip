import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { useModal } from "../common/useModal";
import { Enterprise } from "../types/enterprise";
import { EnterpriseForm } from "./enterpriseForm";

type FieldValues = Omit<Enterprise, "picture" | "id">;

export function UpdateEnterprisePage() {
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();

  async function submit(fields: FieldValues) {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await api.post("/enterprises", formData);
    openModal();
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6 ">
        <h1 className="page-header">
          <GoBackArrow to="/internships" />
          Editar empresa
        </h1>
        <EnterpriseForm submit={submit} enterprise={{} as Enterprise} />
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
