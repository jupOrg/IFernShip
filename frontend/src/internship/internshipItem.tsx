import { Link } from "react-router-dom";
import { Internship } from "../types/internship";
import { IsActiveLabel } from "./isActiveLabel";

type Props = {
  internship: Internship;
};

export function InternshipsItem({ internship }: Props) {
  return (
    <Link to={`/estagios/${internship.id}`}>
      <div className="bg-white rounded-xl p-2 hover:shadow-xl transition duration-75">
        <img
          alt="enterprise"
          src={internship.enterprise.picture}
          className="max-h-36 w-full h-40 rounded-lg object-fit mb-2"
        />
        <div className="flex-row justify-between">
          <div className="font-semibold text-lg">
            {internship.enterprise.name}
          </div>
          <IsActiveLabel isActive={internship.isActive} />
        </div>
        <div>{internship.position}</div>
      </div>
    </Link>
  );
}
