import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { useAuth } from "../auth/authContext";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { Modal } from "../common/modal";
import { SeparateParagraphs } from "../separateParagraphs";
import { Internship } from "../types/internship";
import { RemoveButton } from "./removeButton";

type Subscribe = {
  id?: string;
  userId: string;
  internshipId: string;
};

export function InternshipPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [internship, setInternship] = useState<Internship>();
  const [subscribe, setSubscribe] = useState<Subscribe>();
  const [isFinished, setIsFinished] = useState(false);

  const workStyleDisplayText = {
    isPerson: "Presencial",
    hybrid: "Hibrido",
    remote: "Remoto",
  };

  async function remove() {
    await api.delete("/internships/" + id);
    navigate("/estagios");
  }

  async function getInternship() {
    const res = await api.get<Internship>("/internships/" + id);
    setInternship(res.data);
    getSubscribe(res.data.id);
  }

  async function getSubscribe(internshipId: string) {
    try {
      const res = await api.get<Subscribe>(
        `/subscribes?userId=${user?.id}&&internshipId=${internshipId}`,
      );
      setSubscribe(res.data);
    } catch {
      null;
    }
  }

  async function handleSubscribe() {
    if (!subscribe) {
      const data: Partial<Subscribe> = {
        internshipId: internship?.id,
        userId: user?.id,
      };
      const res = await api.post<Subscribe>("/subscribes/", data);
      setSubscribe(res.data);
      setIsFinished(true);
    } else {
      await api.delete<Subscribe>("/subscribes/" + subscribe.id);
      setSubscribe(undefined);
    }
  }

  useEffect(() => {
    getInternship();
  }, []);

  if (!internship) return <LoadingPlaceholder />;

  return (
    <div className="items-center flex-1 p-2">
      <div className="w-full max-w-xl gap-4">
        <section>
          <h1 className="page-header self-start">
            <GoBackArrow to="/estagios" />
            {internship.office}
          </h1>
          <img
            alt={internship.enterprise.name}
            src={internship.enterprise.picture}
            className="h-72 object-cover rounded-lg bg-black/10"
          />
          <div className="flex-row gap-2 pt-2">
            <RemoveButton resourceText="esse estágio" remove={remove} />
          </div>
        </section>
        <section>
          <h2 className="title">Descrição da vaga</h2>
          <p>{internship.description}</p>
        </section>
        <section>
          <h2 className="title">Modalidade de trabalho</h2>
          <p>{workStyleDisplayText[internship.workStyle]}</p>
        </section>
        <section>
          <h2 className="title">Perfil do profissional?</h2>
          <p>{internship.profissionalProfile}</p>
        </section>
        <div>
          <h2 className="title">
            Sobre a empresa {internship.enterprise.name}
          </h2>
          <SeparateParagraphs text={internship.enterprise.description} />
        </div>
      </div>
      <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
        <button className="button button-primary" onClick={handleSubscribe}>
          {!subscribe ? "Se Inscrever" : "Cancelar Inscrição"}
        </button>
      </div>
      <Modal
        isVisible={isFinished}
        title="Inscrição Registrada"
        message="Inscrição Realizada com sucesso, boa sorte"
      />
    </div>
  );
}
