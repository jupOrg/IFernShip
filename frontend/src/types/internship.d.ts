import { Enterprise } from "./enterprise";

export type Internship = {
  id: string;
  office: string;
  isActive: boolean;
  enterprise: Enterprise;
  work_style: 'isPerson' | 'remote' | 'hibrid';
  profissional_profile: string;
  weekly_workload: number;
  description: string;
  course: string;
};
