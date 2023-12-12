import { Enterprise } from "./enterprise";

export type Internship = {
  id: string;
  office: string;
  course: string;
  position: string;
  isActive: boolean;
  description: string;
  enterprise: Enterprise;
  weekly_workload: number;
  profissional_profile: string;
  work_style: "isPerson" | "remote" | "hybrid";
};
