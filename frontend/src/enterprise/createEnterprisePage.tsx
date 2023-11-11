import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { ImageInput } from "../common/imageInput";

export function CreateEnterprisePage() {
  return (
    <div className="items-center">
      <GradientCurve />
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Cadastrar empresa
        </h1>
        <form className="gap-2 flex flex-col">
          <input type="text" className="default-input" placeholder="Nome" />
          <textarea
            rows={3}
            className="default-input"
            placeholder="Sobre a empresa"
          />
          <input type="text" className="default-input" placeholder="CNPJ" />
          <input type="email" className="default-input" placeholder="E-mail" />
          <ImageInput />
          <button type="submit" className="default-submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
