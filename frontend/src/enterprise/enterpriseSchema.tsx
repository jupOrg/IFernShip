import { mixed, object, string } from "yup";

export const enterpriseSchema = object({
  name: string().required("É necessário informar um nome"),

  description: string().required("É necessário escrever uma descrição"),

  cnpj: string().required("É necessário informar um cnpj"),

  email: string()
    .email("Digite um email valido")
    .required("É necessário informar um email"),

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
