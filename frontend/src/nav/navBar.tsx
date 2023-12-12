import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { LogoutButton } from "../common/logoutButton";
import { UserRoleBadge } from "../common/userRoleBadge";

export function NavBar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="w-full max-w-[14rem]">
      <div className="items-center justify-between h-screen w-full max-w-[14rem] p-6 hidden md:flex fixed left-0">
        <div className="items-center">
          <Link to="/user/editar">
            <img
              alt="user image"
              src={`https://github.com/${user.picture}.png`}
              className="rounded-full w-24 aspect-square border-2 border-white"
            />
          </Link>
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
    </div>
  );
}
