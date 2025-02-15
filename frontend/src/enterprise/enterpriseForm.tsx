import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { createObjFile } from "../common/createObjFile";
import { ErrorMessage } from "../common/errorMessage";
import { ImageInput } from "../common/imageInput";
import { Enterprise } from "../types/enterprise";
import { enterpriseSchema } from "./enterpriseSchema";

type Props = {
  enterprise?: Enterprise;
  submit: (enterprise: Enterprise) => void;
};

export function EnterpriseForm({ enterprise, submit }: Props) {
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Enterprise>({
    resolver: yupResolver(enterpriseSchema),
    defaultValues: {
      ...enterprise,
      picture: createObjFile(enterprise?.picture),
    },
  });

  return (
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

      <InputMask
        type="text"
        placeholder="CNPJ"
        mask="99.999.999/9999-99"
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
        Salvar
      </button>
    </form>
  );
}
