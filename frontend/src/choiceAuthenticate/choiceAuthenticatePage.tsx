import { Link } from "react-router-dom";
import { Logo } from "../common/logo";

export function ChoiceAuthenticatePage() {
  return (
    <div className="flex-row flex-1 bg-curve-right p-2">
      <Logo />
      <div className="flex-1 items-center justify-center">
        <div className="gap-20 w-full max-w-md">
          <div className="items-center gap-2  sm:hidden">
            <img
              alt="logo"
              src="./ifpb-logo.svg"
              className="w-20 aspect-square"
            />
            <h1 className="font-semibold text-2xl text-center">IFernShip</h1>
          </div>
          <p className="text-black text-center lg:px-6 2xl:text-2xl">
            Encontre o estágio dos seus sonhos e comece a trilhar o caminho para
            o sucesso profissional!
          </p>
          <div className="gap-4">
            <Link to="/entrar" className="button btn btn-primary">
              Entrar
            </Link>
            <Link to="/escolher-pessoa" className="button btn btn-secondary">
              Registrar-se
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden sm:flex">
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
