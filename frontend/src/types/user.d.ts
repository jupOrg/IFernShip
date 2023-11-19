import { Role } from "./role";

export type User = {
  role: Role;
  name: string;
  email: string;
  password: string;
  picture: string;
};
