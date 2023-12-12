import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { Internship } from "../types/internship";
import { useAuth } from "../auth/authContext";

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
        `/subscribes?userId=${user?.id}&&internshipId=${internshipId}`
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

  // TODO replace it
  if (!internship) return <></>;

  return (
    <div className="w-full items-center p-2 pl-20 gap-8">
      <h1 className="page-header self-start">
        <GoBackArrow to="/estagios" />
        {internship.enterprise.name}
      </h1>
      <div className="h-full grid grid-cols-2 auto-cols-fr gap-4">
        <picture>
          <img
            alt="enterprise"
            src={internship.enterprise.picture}
            className="w-full h-32 max-h-40 rounded-lg object-fit mb-2 shadow bg-black/10"
          />
        </picture>
        <div>
          <h1 className="title">Sobre a empresa</h1>
          <div className="gap-2">
            {internship.enterprise.description.split("\n").map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
        <span>
          <h1 className="title">Modalidade de trabalho:</h1>
          <p>{work_style_translator[internship.work_style]}</p>
        </span>
        <span>
          <h1 className="title">Descrição da vaga:</h1>
          <p>{internship.description}</p>
        </span>
        <span>
          <h1 className="title">Perfil do profissional?</h1>
          <p>{internship.profissional_profile}</p>
        </span>
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
