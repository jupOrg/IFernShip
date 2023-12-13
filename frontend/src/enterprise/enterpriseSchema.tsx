import { mixed, object, string } from "yup";

export const enterpriseSchema = object({
  name: string().required(),
  cnpj: string().required(),
  description: string().required(),
  email: string().required().email(),
  picture: mixed<File>()
    .test("required", "Por favor, selecione uma imagem", (value) => {
      return !!value && !!value.name;
    })
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => !value || (value && value.type.includes("image/")),
    ),
});
