import { number, object, string } from "yup";
import { courses } from "../data/courses";
import { workStyles } from "../data/workStyles";

export const internshipSchema = object({
  profissionalProfile: string().required(
    "É requerido repassar um perfil de profissional",
  ),

  description: string().required(
    "É requerido repassar um perfil de profissional",
  ),

  workStyle: string()
    .required("Selecione um estilo de trabalho")
    .oneOf(workStyles, "Selecione um estilo de trabalho válido"),

  course: string()
    .required("Selecione um curso")
    .oneOf(courses, "Selecione um estilo de trabalho válido"),

  office: string().required("É necessário repassar o Cargo"),

  weeklyWorkload: number()
    .required("É necessário passar a quantidade de horas trabalhadas")
    .positive("A carga horária deve ser um número positivo"),

  enterpriseId: string().required("Selecione uma empresa"),
});
