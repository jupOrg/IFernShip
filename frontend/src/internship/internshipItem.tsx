import { Internship } from "../types/internship";

type Props = {
  internship: Internship;
};

export function InternshipsItem({ internship }: Props) {
  return <div>{internship.enterprise.name}</div>;
}
