import { Internship } from "./internship";

export type Enterprise = {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  picture: string;
  description: string;
  internships: Internship[];
};
