import { Enterprise } from "./enterprise";

export type Internship = {
  id: string;
  office: string;
  course: string;
  isActive: boolean;
  description: string;
  enterpriseId: string;
  enterprise: Enterprise;
  weeklyWorkload: number;
  profissionalProfile: string;
  workStyle: "isPerson" | "remote" | "hybrid";
};
