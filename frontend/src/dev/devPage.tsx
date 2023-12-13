import { useState } from "react";
import { Modal } from "../common/modal";

export function DevPage() {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setIsVisible((old) => !old);
  //   }, 1000);
  // }, []);

  return (
    <div>
      hello dev
      <Modal isVisible={isVisible} title="teste" message="algo">
        <div>teste</div>
      </Modal>
    </div>
  );
}
