import { Link } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { LogoutButton } from "../common/logoutButton";
import { UserRoleBadge } from "../common/userRoleBadge";
import { Tabs } from "./tabs";

export function NavBar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="w-full max-w-[14rem] hidden sm:flex">
      <div className="items-center justify-between h-screen w-full max-w-[14rem] p-6 fixed left-0">
        <div className="items-center">
          <Link to="/conta/editar">
            <img
              alt="user image"
              src={user.picture}
              className="rounded-full w-20 aspect-square border-2 border-white bg-black/10"
            />
          </Link>
          <div className="text-lg font-medium">{user.name}</div>
          <UserRoleBadge role={user.role} />
        </div>
        <div className="text-lg">
          <Tabs />
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}
