import { Link } from "react-router-dom";
import { Role } from "../types/role";

type Props = {
  urlImage: string;
  text: "Coordenador" | "Estudante";
};

export function CardChoicePerson({ text, urlImage }: Props) {
  const classCard =
    "shadow-cards bg-white justify-between max-h-64 rounded-3xl py-2 px-6 gap-2";
  const role: Role = text === "Estudante" ? "student" : "coordinator";
  return (
    <Link to="/cadastro" state={role}>
      <div className={classCard}>
        <img src={urlImage} className="w-40 aspect-square" />
        <p className="text-black text-lg w-40 text-center">{text}</p>
      </div>
    </Link>
  );
}
