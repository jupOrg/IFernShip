import { Logo } from "../common/logo";

export function ChoiceAuthenticateMD() {
  return (
    <div className="flex-row min-h-screen bg-curve-right">
      <div className="w-1/2 min-h-full pl-24 py-16 justify-between">
        <Logo />
        <div className="gap-20 items-center max-w-xl">
          <p className="text-black text-3xl text-center lg:px-6">
            Encontre o estágio dos seus sonhos e comece a trilhar o caminho para
            o sucesso profissional! Não perca mais tempo procurando vagas
            manualmente, baixe agora e comece a construir seu futuro!
          </p>
          <div className="gap-4 w-80">
            <a href="/entrar">
              <button className="btn btn-primary">Entrar</button>
            </a>
            <a href="/escolher-pessoa">
              <button className="btn btn-secondary">Registrar-se</button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-1/2 justify-center gap-4">
          <h1 className="text-[#5CFFCE] text-7xl font-bold text-center">
            IFernShip
          </h1>
          <h1 className="text-[#C5FFEA] text-7xl font-bold text-center">
            Vagas de Estágios
          </h1>
        </div>
      </div>
    </div>
  );
}
