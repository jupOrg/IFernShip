import { UserRoleBadge } from "./userRoleBadge";

export function NavBar() {
  return (
    <div className="items-center w-full max-w-[14rem] p-6">
      <img
        src="https://github.com/yolisses.png"
        alt="user image"
        className="rounded-full w-24 aspect-square border-2 border-white"
      />
      <div className="text-lg font-medium">Nome do usuário</div>
      <UserRoleBadge role="student" />
    </div>
  );
}
