import { Internship } from "../types/internship";
import { InternshipLink } from "./internshipLink";

type Props = {
  internships: Internship[];
};

export function InternshipLinks({ internships }: Props) {
  if (!internships.length) {
    return <div>Sem estágios por enquanto</div>;
  }

  return (
    <div>
      {internships.map((internship) => (
        <InternshipLink internship={internship} key={internship.id} />
      ))}
    </div>
  );
}
