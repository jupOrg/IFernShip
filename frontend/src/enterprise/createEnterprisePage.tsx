import { useForm } from "react-hook-form";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { ImageInput } from "../common/imageInput";
import { Enterprise } from "../types/enterprise";

type FieldValues = Omit<Enterprise, "picture">;

export function CreateEnterprisePage() {
  const { register, handleSubmit } = useForm<FieldValues>();

  async function submit(fields: FieldValues) {
    const res = await api.post("/enterprises", fields);
    console.log(res.data);
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
          <ImageInput />
          <button type="submit" className="default-submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
