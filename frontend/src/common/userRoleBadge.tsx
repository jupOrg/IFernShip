import { Role } from "../types/role";

type Props = {
  role: Role;
};

export function UserRoleBadge({ role }: Props) {
  const displayTexts: Record<Role, string> = {
    COORDINATOR: "Coordenador",
    STUDENT: "Estudante",
  };

  return <div>{displayTexts[role]}</div>;
}
