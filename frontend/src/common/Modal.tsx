export type ModalProps = {
  title?: string;
  message?: string;
  isVisible?: boolean;
  callbackClose?: () => void;
};

export function Modal({
  title,
  message,
  isVisible,
  callbackClose,
}: ModalProps) {
  const classVisible = isVisible
    ? "opacity-100 visible"
    : "invisible opacity-0";
  return (
    <div
      data-cy="modal-error"
      className={`${classVisible} duration-200 ease-linear bg-black bg-opacity-80 fixed inset-0 min-h-screen flex justify-center items-center transition-modal`}
    >
      <div className="bg-white px-9 py-10 space-y-9 shadow-common rounded-xl w-[40rem]">
        <span>
          <h1 className="text-2xl font-medium">{title}</h1>
        </span>
        <span>
          <p className="text-lg">{message}</p>
        </span>
        <div>
          <button
            className="btn btn-primary w-1/4 self-end"
            onClick={callbackClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
