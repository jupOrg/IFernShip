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
  const classVisible = isVisible ? "fixed opacity-100" : "hidden opacity-0";
  return (
    <div
      data-cy="modal-error"
      className={`${classVisible} duration-200 ease-linear transition bg-black bg-opacity-80 fixed inset-0 justify-center items-center`}
    >
      <div className="bg-white p-4 gap-2 shadow-common rounded-xl w-full max-w-lg">
        <h1 className="text-xl font-medium">{title}</h1>
        <p>{message}</p>
        <div className="sm:flex-row sm:justify-end">
          <button className="btn btn-primary px-14" onClick={callbackClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
