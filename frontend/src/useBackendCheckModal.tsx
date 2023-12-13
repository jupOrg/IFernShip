import { useEffect, useState } from "react";
import { api } from "./api/api";
import { Modal } from "./common/modal";

export function useBackendErrorModal() {
  const [isVisible, setIsVisible] = useState(false);

  function handleModalClose() {
    setIsVisible(false);
  }

  function handleError(error: any) {
    if (error?.code === "ERR_NETWORK") {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    const id = api.interceptors.response.use(null, handleError);
    return () => {
      api.interceptors.response.eject(id);
    };
  }, []);

  function BackendErrorModal() {
    return (
      <Modal
        isVisible={isVisible}
        callbackClose={handleModalClose}
        title="Não foi possível se conectar"
        message="Por favor confira se o backend está ligado"
      />
    );
  }

  return { BackendErrorModal };
}
