import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useAuth } from "../auth/authContext";
import { useModal } from "../common/useModal";
import { Internship } from "../types/internship";

type Subscribe = {
  id?: string;
  userId: string;
  internshipId: string;
};

type Props = {
  internship: Internship;
};

export function SubscribeButton({ internship }: Props) {
  const { user } = useAuth();
  const { Modal, openModal } = useModal();
  const [subscribe, setSubscribe] = useState<Subscribe>();

  async function getResource() {
    const res = await api.get<Subscribe>(
      `/subscribes?userId=${user?.id}&&internshipId=${internship.id}`,
    );
    setSubscribe(res.data);
  }

  async function handleSubscribe() {
    if (!subscribe) {
      const data: Omit<Subscribe, "id"> = {
        userId: user?.id,
        internshipId: internship?.id,
      };
      const res = await api.post<Subscribe>("/subscribes/", data);
      setSubscribe(res.data);
      openModal();
    } else {
      await api.delete<Subscribe>("/subscribes/" + subscribe.id);
      setSubscribe(undefined);
    }
  }

  useEffect(() => {
    getResource();
  }, []);

  if (user?.role !== "student") {
    return null;
  }

  return (
    <>
      <button className="button button-primary" onClick={handleSubscribe}>
        {!subscribe ? "Se Inscrever" : "Cancelar Inscrição"}
      </button>
      <Modal
        title="Inscrição Registrada"
        message="Inscrição Realizada com sucesso, boa sorte"
      />
    </>
  );
}
