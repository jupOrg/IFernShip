import { Link } from "react-router-dom";
import { Logo } from "../common/logo";

export function ChoiceAuthenticateMD() {
  return (
    <div className="flex-row flex-1 bg-curve-right">
      <Logo />
      <div className="flex-1 items-center justify-center">
        <div className="gap-20 items-center max-w-xl">
          <p className="text-black text-center lg:px-6 2xl:text-2xl">
            Encontre o estágio dos seus sonhos e comece a trilhar o caminho para
            o sucesso profissional! Não perca mais tempo procurando vagas
            manualmente, baixe agora e comece a construir seu futuro!
          </p>
          <div className="gap-4 w-80">
            <Link to="/entrar" className="button btn btn-primary">
              Entrar
            </Link>
            <Link to="/escolher-pessoa" className="button btn btn-secondary">
              Registrar-se
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="h-1/2 justify-center gap-4">
          <h1 className="text-[#5CFFCE] text-3xl font-bold text-center">
            IFernShip
          </h1>
          <h1 className="text-[#C5FFEA] text-3xl font-bold text-center">
            Vagas de Estágios
          </h1>
        </div>
      </div>
    </div>
  );
}
