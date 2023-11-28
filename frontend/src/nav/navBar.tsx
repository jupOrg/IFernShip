import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { LogoutButton } from "../common/logoutButton";
import { UserRoleBadge } from "../common/userRoleBadge";

export function NavBar() {
  const { user } = useAuth();

  if (!user) return null;

  console.log(user);

  return (
    <div className="items-center justify-between w-full max-w-[14rem] p-6 hidden md:flex">
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
      
      {user.role === "coordinator" && (
        <div className="gap-2">
          <Link to="/empresas/criar" className="button badge">
            <FaPlus />
            Adicionar empresa
          </Link>
          <Link to="/estagios/criar" className="button badge">
            <FaPlus />
            Adicionar estágio
          </Link>
        </div>
      )}

      <LogoutButton />
    </div>
  );
}
