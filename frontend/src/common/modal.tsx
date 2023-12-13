import { ReactNode } from "react";

export type ModalProps = {
  title?: string;
  message?: string;
  isVisible?: boolean;
  children?: ReactNode;
  hideOkButton?: boolean;
  callbackClose?: () => void;
};

export function Modal({
  title,
  message,
  children,
  isVisible,
  callbackClose,
  hideOkButton = false,
}: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="animate-modal fixed inset-0 duration-100 ease-linear transition-modal bg-black bg-opacity-80 justify-center items-center z-50">
      <div className="bg-white p-4 gap-2 shadow-common rounded-xl w-full max-w-lg">
        <h1 className="text-xl font-medium">{title}</h1>
        <p>{message}</p>
        {children}
        {!hideOkButton && (
          <div className="sm:flex-row sm:justify-end">
            <button className="btn btn-primary px-14" onClick={callbackClose}>
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
