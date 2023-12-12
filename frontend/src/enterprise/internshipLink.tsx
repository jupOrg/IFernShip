import { Link } from "react-router-dom";
import { Internship } from "../types/internship";

type Props = {
  internship: Internship;
};

export function InternshipLink({ internship }: Props) {
  return (
    <Link to={"/estagios/" + internship.id}>
      <div>
        <div>{internship.position}</div>
        <div>{internship.description}</div>
      </div>
    </Link>
  );
}
