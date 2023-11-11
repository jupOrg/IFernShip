import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { LogoutButton } from "./logoutButton";
import { UserRoleBadge } from "./userRoleBadge";

export function NavBar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="items-center justify-between w-full max-w-[14rem] p-6">
      <div className="items-center">
        <img
          alt="user image"
          // TODO replace by real image
          src={`https://github.com/${user.picture}.png`}
          className="rounded-full w-24 aspect-square border-2 border-white"
        />
        <div className="text-lg font-medium">{user.name}</div>
        <UserRoleBadge role={user.role} />
      </div>
      <div>
        <Link to="/empresas/criar" className="flex flex-row items-center badge">
          <FaPlus />
          Adicionar empresa
        </Link>
      </div>

      <LogoutButton />
    </div>
  );
}
