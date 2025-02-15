import { FaDoorOpen } from "react-icons/fa";
import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleClick() {
    await logout();
    navigate("/");
  }

  return (
    <button
      onClick={handleClick}
      className="badge flex-row gap-1"
      data-cy="button-logout"
    >
      <FaDoorOpen /> Sair
    </button>
  );
}
