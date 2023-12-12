import { Role } from "./role";

export type User = {
  id?: string;
  role: Role;
  name: string;
  email: string;
  course: string;
  picture: string;
  password: string;
};
