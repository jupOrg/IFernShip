import { mixed, object, string } from "yup";
import { courses } from "../data/courses";

export const userSchema = object({
  name: string().required(),
  email: string().required().email(),
  course: string()
    .required()
    .oneOf(courses, "Selecione um estilo de trabalho válido"),
  picture: mixed<File>()
    .test("required", "Por favor, selecione uma imagem", (value) => {
      return !!value && !!value.name;
    })
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => !value || (value && value.type?.includes("image/")),
    ),
});
