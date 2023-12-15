import { Link } from "react-router-dom";
import { Role } from "../types/role";

type Props = {
  urlImage: string;
  text: "Coordenador" | "Estudante";
};

export function CardChoicePerson({ text, urlImage }: Props) {
  const classCard =
    "shadow-cards bg-white justify-between max-h-64 w-10/12 md:w-full md:min-w-40 rounded-3xl py-2 px-6 gap-2";
  const role: Role = text === "Estudante" ? "student" : "coordinator";
  return (
    <Link to="/cadastro" state={role}>
      <div className={classCard}>
        <img src={urlImage} className="w-full aspect-square" />
        <p className="text-black md:text-lg text-center">{text}</p>
      </div>
    </Link>
  );
}
