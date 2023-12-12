import { Link } from "react-router-dom";
import { IsActiveLabel } from "../internship/isActiveLabel";
import { Internship } from "../types/internship";

type Props = {
  internship: Internship;
};

export function InternshipLink({ internship }: Props) {
  return (
    <Link to={`/estagios/${internship.id}`}>
      <div className="bg-white rounded-xl p-2 hover:shadow-xl transition duration-75">
        <div className="flex-row justify-between">
          <div className="font-semibold">{internship.office}</div>
          <IsActiveLabel isActive={internship.isActive} />
        </div>
        <div>{internship.description}</div>
      </div>
    </Link>
  );
}
