import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";

import { createApiInstance } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { ImageInput } from "../common/imageInput";
import { Enterprise } from "../types/enterprise";
import { useAuth } from "../auth/authContext";

type FieldValues = Omit<Enterprise, "picture" | "id">;

const schema = yup.object({
  name: yup.string().required("É nescessario informar um nome"),
  description: yup.string().required("É nescessario escrever uma descrição"),
  cnpj: yup.string().required("É nescessario informar um cnpj"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É nescessário informar um email"),
});

export function CreateEnterprisePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const [valuePicture, setValuePicture] = useState<File | null>(null);

  const { token, handleModal } = useAuth();
  const api = createApiInstance(token);

  const navigate = useNavigate();

  async function submit(fields: FieldValues) {
    if (!valuePicture) {
      return null;
    }

    const formData = new FormData();
    formData.append("picture", valuePicture);

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await api.post("/enterprises", formData);

    if (res.status === 201) {
      handleModal?.({
        title: "Empressa registrada com Sucesso",
        callbackClose: () => navigate("/"),
      });
    }
  }

  return (
    <div className="items-center">
      <GradientCurve />
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Cadastrar empresa
        </h1>
        <form className="gap-2 flex flex-col" onSubmit={handleSubmit(submit)}>
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
          <ImageInput file={valuePicture} setFile={setValuePicture} />
          <button type="submit" className="default-submit">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
