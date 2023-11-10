import { FaDoorOpen } from "react-icons/fa";
import { useAuth } from "../auth/authContext";

export function LogoutButton() {
  const { logout } = useAuth();

  function handleClick() {
    logout();
  }

  return (
    <button onClick={handleClick} className="badge flex-row gap-1">
      <FaDoorOpen /> Sair
    </button>
  );
}
