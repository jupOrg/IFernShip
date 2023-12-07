import { Role } from "./role";

export type User = {
  role: Role;
  name: string;
  email: string;
  course: string;
  picture: string;
  password: string;
};
