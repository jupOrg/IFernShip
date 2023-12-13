import { useState } from "react";
import { Modal, ModalProps } from "./modal";

export function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  function handleModalClose() {
    setIsVisible(false);
  }

  function openModal() {
    setIsVisible(true);
  }

  function LinkedModal(props: ModalProps) {
    return (
      <Modal
        isVisible={isVisible}
        callbackClose={handleModalClose}
        {...props}
      />
    );
  }

  return {
    isVisible,
    openModal,
    setIsVisible,
    Modal: LinkedModal,
  };
}
