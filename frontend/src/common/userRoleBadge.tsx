import { Role } from "../types/role";

type Props = {
  role: Role;
};

export function UserRoleBadge({ role }: Props) {
  const displayTexts: Record<Role, string> = {
    coordinator: "Coordenador",
    student: "Estudante",
  };

  return <div className="badge">{displayTexts[role]}</div>;
}
