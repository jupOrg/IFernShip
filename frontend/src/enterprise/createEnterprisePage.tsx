import { useForm } from "react-hook-form";
import { createApiInstance } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { ImageInput } from "../common/imageInput";
import { Enterprise } from "../types/enterprise";
import { useAuth } from "../auth/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FieldValues = Omit<Enterprise, "picture" | "id">;

export function CreateEnterprisePage() {
  const { register, handleSubmit, watch } = useForm<Enterprise>();

  const [valuePicture, setValuePicture] = useState<File | null>(null);

  const { token, handleModal } = useAuth();
  const api = createApiInstance(token);

  const navigate = useNavigate();

  async function submit(fields: Enterprise) {
    if (!valuePicture) {
      return null;
    }

    const formData = new FormData();
    formData.append('image', valuePicture);
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    // console.log(formData)

    // const formData = {
    //   ...fields,
    //   picture: valuePicture
    // }

    console.log("Hello")
    console.log(formData)
    
    const res = await api.post("/enterprises", formData);
    if (res.status === 201) {
      handleModal?.({
        title: "Empressa registrada com Sucesso",
        callbackClose: () => navigate("/"),
      });
    }
  }

  // const listFiles = watch("picture");
  // const valuePicture = listFiles[0];

  return (
    <div className="items-center">
      <GradientCurve />
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Cadastrar empresa
        </h1>
        <form className="gap-2 flex flex-col" onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Nome"
            className="default-input"
            {...register("name")}
          />
          <textarea
            rows={3}
            className="default-input"
            placeholder="Sobre a empresa"
            {...register("description")}
          />
          <input
            type="text"
            placeholder="CNPJ"
            className="default-input"
            {...register("cnpj")}
          />
          <input
            type="email"
            className="default-input"
            placeholder="E-mail"
            {...register("email")}
          />
          <ImageInput file={valuePicture} setFile={setValuePicture} register={register} name="picture" watch={watch} />
          <button type="submit" className="default-submit">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
