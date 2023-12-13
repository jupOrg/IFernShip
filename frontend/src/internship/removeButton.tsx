import { FaTrash } from "react-icons/fa";
import { useModal } from "../common/useModal";

type Props = {
  resourceText: string;
  remove: () => void;
};

export function RemoveButton({ resourceText, remove }: Props) {
  const { Modal, openModal, closeModal } = useModal();

  function handleClick() {
    openModal();
  }

  return (
    <>
      <button className="simple-button" onClick={handleClick}>
        <FaTrash />
        Remover estágio
      </button>
      <Modal
        hideOkButton
        title={`Tem certeza que quer remover ${resourceText}?`}
        message="Isso não pode ser desfeito"
      >
        <div className="sm:flex-row sm:justify-end gap-2">
          <button className="btn btn-danger px-10" onClick={remove}>
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
