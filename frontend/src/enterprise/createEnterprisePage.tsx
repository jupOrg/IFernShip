import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";

export function CreateEnterprisePage() {
  return (
    <div className="items-center">
      <GradientCurve />
      <div className="page-header">
        <GoBackArrow to="/empresas" />
        Cadastrar empresa
      </div>
      <div className="w-full max-w-xl gap-6">a</div>
    </div>
  );
}
