import { number, object, string } from "yup";
import { courses } from "../data/courses";
import { workStyles } from "../data/workStyles";

export const internshipSchema = object({
  profissionalProfile: string().required(),
  description: string().required(),
  workStyle: string()
    .required()
    .oneOf(workStyles, "Selecione um estilo de trabalho"),
  course: string().required().oneOf(courses, "Selecione um curso"),
  office: string().required(),
  weeklyWorkload: number().required().positive(),
  enterpriseId: string().required(),
});
