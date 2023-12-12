import { Role } from "../types/role";

type Props = {
  role: Role;
};

export function UserRoleBadge({ role }: Props) {
  const displayTexts: Record<Role, string> = {
    coordinator: "Coordenador",
    student: "Estudante",
  };

  return (
    <div className="border border-solid border-black rounded-full py-0.5 px-2 text-black font-medium">
      {displayTexts[role]}
    </div>
  );
}
