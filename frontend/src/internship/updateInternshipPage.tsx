import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { useModal } from "../common/useModal";
import { useResource } from "../common/useResource";
import { Internship } from "../types/internship";
import { InternshipForm } from "./internshipForm";

export function UpdateInternshipPage() {
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();
  const { id } = useParams();
  const internship = useResource<Internship>("/internships/" + id);

  async function submit(data: Internship) {
    await api.patch("/internships/" + id, { ...data, enterprise: undefined });
    openModal();
  }

  if (!internship) {
    return <LoadingPlaceholder />;
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6 ">
        <h1 className="page-header">
          <GoBackArrow to="/internships" />
          Editar estágio
        </h1>
        <InternshipForm submit={submit} internship={internship} />
      </div>
      <Modal
        title="Estágio atualizado com sucesso"
        callbackClose={() => {
          navigate("/internships/" + id);
        }}
      />
    </div>
  );
}
