import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { vocabulary } from "../vocabulary";
import { useModal } from "./useModal";

type Props = {
  path: string;
  redirect: string;
  resource: string;
};

export function RemoveButton({ path, redirect, resource }: Props) {
  const { Modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  async function handleRemoveClick() {
    await api.delete(path);
    navigate(redirect);
  }

  return (
    <>
      <button className="simple-button" onClick={openModal}>
        <FaTrash />
        Remover {vocabulary[resource]}
      </button>
      <Modal
        hideOkButton
        title={`Tem certeza que quer remover ${
          vocabulary["this " + resource]
        }?`}
        message="Isso não pode ser desfeito"
      >
        <div className="sm:flex-row sm:justify-end gap-2">
          <button className="btn btn-danger px-10" onClick={handleRemoveClick}>
            Remover
          </button>
          <button className="btn btn-secondary px-10" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </Modal>
    </>
  );
}
