import { mixed, object, string } from "yup";

export const enterpriseSchema = object({
  name: string().required(),
  cnpj: string().required().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ inválido'),
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
