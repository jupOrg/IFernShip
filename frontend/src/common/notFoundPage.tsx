import { Link } from "react-router-dom";
import { NavBar } from "../nav/navBar";
import { GradientCurve } from "./gradientCurve";

export function NotFoundPage() {
  return (
    <div className="flex-row flex-1">
      <NavBar />
      <GradientCurve />
      <div className="items-center justify-center relative flex-1 gap-6">
        <div>
          <h1 className="text-3xl">Não encontramos a página</h1>
          <div>Por favor confira se o endereço buscado está correto</div>
        </div>
        <Link to="/" className="default-submit px-4">
          Ir para a tela inicial
        </Link>
      </div>
    </div>
  );
}
