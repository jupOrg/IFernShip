import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { useAuth } from "../auth/authContext";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { Internship } from "../types/internship";
import { RemoveButton } from "./removeButton";

type Subscribe = {
  id?: string;
  userId: string;
  internshipId: string;
};

export function InternshipPage() {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship>();
  const [subscribe, setSubscribe] = useState<Subscribe>();

  const { user, handleModal } = useAuth();

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
      handleModal?.({
        isVisible: true,
        title: "Inscrição Registrada",
        message: "Inscrição Realizada com sucesso, boa sorte",
      });
    } else {
      await api.delete<Subscribe>("/subscribes/" + subscribe.id);
      setSubscribe(undefined);
    }
  }

  useEffect(() => {
    getInternship();
  }, []);

  const work_style_translator = {
    isPerson: "Presencial",
    hybrid: "Hibrido",
    remote: "Remoto",
  };

  if (!internship) return <LoadingPlaceholder />;

  return (
    <div className="w-full items-center p-2 pl-20 gap-8">
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
            <RemoveButton />
          </div>
        </section>
        <section>
          <h2 className="title">Descrição da vaga</h2>
          <p>{internship.description}</p>
        </section>
        <section>
          <h2 className="title">Modalidade de trabalho</h2>
          <p>{work_style_translator[internship.work_style]}</p>
        </section>
        <section>
          <h2 className="title">Perfil do profissional?</h2>
          <p>{internship.profissional_profile}</p>
        </section>
        <div>
          <h2 className="title">
            Sobre a empresa {internship.enterprise.name}
          </h2>
          <div className="gap-2">
            {internship.enterprise.description.split("\n").map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
        <button
          className="button bg-green-600 text-white p-2 rounded"
          onClick={handleSubscribe}
        >
          {!subscribe ? "Se Inscrever" : "Cancelar Inscrição"}
        </button>
      </div>
    </div>
  );
}
