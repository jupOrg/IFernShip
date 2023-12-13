import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { vocabulary } from "../vocabulary";

type Props = {
  path: string;
  resource: string;
};

export function UpdateButton({ path, resource }: Props) {
  return (
    <Link to={path + "/editar"} className="button simple-button">
      <FaPen />
      Editar {vocabulary[resource]}
    </Link>
  );
}
