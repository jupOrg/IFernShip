import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { ErrorMessage } from "../common/errorMessage";
import { GoBackArrow } from "../common/goBackArrow";
import { ImageInput } from "../common/imageInput";
import { useModal } from "../common/useModal";
import { Enterprise } from "../types/enterprise";
import { enterpriseSchema } from "./enterpriseSchema";

type FieldValues = Omit<Enterprise, "picture" | "id">;

export function CreateEnterprisePage() {
  const navigate = useNavigate();
  const { Modal, openModal } = useModal();
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(enterpriseSchema),
  });

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
          <GoBackArrow to="/internships" />
          Adicionar empresa
        </h1>
        <form className="gap-2 flex flex-col" onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Nome"
            className="default-input"
            {...register("name")}
          />
          <ErrorMessage error={errors.name} />

          <textarea
            rows={3}
            className="default-input"
            placeholder="Sobre a empresa"
            {...register("description")}
          />
          <ErrorMessage error={errors.description} />

          <input
            type="text"
            placeholder="CNPJ"
            className="default-input"
            {...register("cnpj")}
          />
          <ErrorMessage error={errors.cnpj} />

          <input
            type="email"
            className="default-input"
            placeholder="E-mail"
            {...register("email")}
          />
          <ErrorMessage error={errors.email} />

          <ImageInput
            file={watch("picture")}
            setFile={(value: File) => setValue("picture", value)}
            {...register("picture")}
          />
          <ErrorMessage error={errors.picture} />

          <button type="submit" className="default-submit">
            Adicionar
          </button>
        </form>
      </div>
      <Modal
        title="Empresa registrada com Sucesso"
        callbackClose={() => {
          navigate("/enterprises");
        }}
      />
    </div>
  );
}
