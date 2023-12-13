import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { ImageInput } from "../common/imageInput";
import { useModal } from "../common/useModal";
import { Enterprise } from "../types/enterprise";

type FieldValues = Omit<Enterprise, "picture" | "id">;

const schema = yup.object({
  name: yup.string().required("É necessário informar um nome"),
  description: yup.string().required("É necessário escrever uma descrição"),
  cnpj: yup.string().required("É necessário informar um cnpj"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É necessário informar um email"),
  picture: yup
    .mixed<File>()
    .test("required", "Por favor, selecione uma imagem", (value) => {
      return !!value && !!value.name;
    })
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => !value || (value && value.type.includes("image/")),
    ),
});

export function CreateEnterprisePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const { Modal, openModal } = useModal();

  const navigate = useNavigate();

  async function submit(fields: FieldValues) {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await api.post("/enterprises", formData);
    openModal();
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6 ">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Adicionar empresa
        </h1>
        <form className="gap-2.5 flex flex-col" onSubmit={handleSubmit(submit)}>
          <div className="gap-2">
            <input
              type="text"
              placeholder="Nome"
              className="default-input"
              {...register("name")}
            />
            {errors.name && (
              <div className="error-message">{errors.name.message}</div>
            )}
          </div>
          <div className="gap-2">
            <textarea
              rows={3}
              className="default-input"
              placeholder="Sobre a empresa"
              {...register("description")}
            />
            {errors.description && (
              <div className="error-message">{errors.description.message}</div>
            )}
          </div>
          <div className="gap-2">
            <input
              type="text"
              placeholder="CNPJ"
              className="default-input"
              {...register("cnpj")}
            />
            {errors.cnpj && (
              <div className="error-message">{errors.cnpj.message}</div>
            )}
          </div>
          <div className="gap-2">
            <input
              type="email"
              className="default-input"
              placeholder="E-mail"
              {...register("email")}
            />
            {errors.email && (
              <div className="error-message">{errors.email.message}</div>
            )}
          </div>
          <div className="gap-2">
            <ImageInput
              file={watch("picture")}
              setFile={(value: File) => setValue("picture", value)}
              {...register("picture")}
            />
            {errors.picture && (
              <div className="error-message">{errors.picture.message}</div>
            )}
          </div>
          <button type="submit" className="default-submit">
            Adicionar
          </button>
        </form>
      </div>
      <Modal
        title="Empresa registrada com Sucesso"
        callbackClose={() => {
          navigate("/empresas");
        }}
      />
    </div>
  );
}
