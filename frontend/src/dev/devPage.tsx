import { useState } from "react";
import { Modal } from "../common/modal";

export function DevPage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      hello dev
      <button onClick={() => setIsVisible(true)}>open modal</button>
      <Modal
        isVisible={isVisible}
        title="teste"
        message="algo"
        callbackClose={() => setIsVisible(false)}
      >
        <div>teste</div>
      </Modal>
    </div>
  );
}
