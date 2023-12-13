import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useModal } from "./useModal";

type Props = {
  path: string;
  redirect: string;
  resourceText: string;
};

export function RemoveButton({ path, redirect, resourceText }: Props) {
  const { Modal, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  async function handleRemoveClick() {
    await api.delete(path);
    navigate(redirect);
  }

  function handleCancelClick() {
    openModal();
  }

  return (
    <>
      <button className="simple-button" onClick={handleCancelClick}>
        <FaTrash />
        Remover estágio
      </button>
      <Modal
        hideOkButton
        title={`Tem certeza que quer remover ${resourceText}?`}
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
