import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { useModal } from "../common/useModal";
import { Internship } from "../types/internship";
import { InternshipForm } from "./internshipForm";

export function CreateInternshipPage() {
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();

  async function submit(interneship: Internship) {
    await api.post("/internships", interneship);
    openModal();
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/internships" />
          Adicionar estágio
        </h1>
        <InternshipForm submit={submit} />
      </div>
      <Modal
        title="Estágio registrado com sucesso"
        callbackClose={() => {
          navigate("/internships");
        }}
      />
    </div>
  );
}
