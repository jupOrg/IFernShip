import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};

export function GoBackArrow({ to }: Props) {
  return (
    <Link to={to} className="inline p-2">
      <FaArrowLeft />
    </Link>
  );
}
