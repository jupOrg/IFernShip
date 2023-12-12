import { Internship } from "../types/internship";
import { InternshipLink } from "./internshipLink";

type Props = {
  internships: Internship[];
};

export function InternshipLinks({ internships }: Props) {
  return (
    <div>
      {internships.map((internship) => (
        <InternshipLink internship={internship} key={internship.id} />
      ))}
    </div>
  );
}
