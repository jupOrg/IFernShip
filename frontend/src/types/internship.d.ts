import { Enterprise } from "./enterprise";

export type Internship = {
  id: string;
  position: string;
  isActive: boolean;
  enterprise: Enterprise;
};
