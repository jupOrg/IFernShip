import { Link } from "react-router-dom";

export function ChoiceAuthenticateSM() {
  return (
    <div className="min-h-screen gradient-page items-center p-2 justify-between">
      <picture className="w-full flex">
        <img src="./ifpb-logo-white.svg" alt="logo" className="w-20" />
      </picture>
      <div className="gap-2 items-center max-w-lg">
        <h1 className="font-bold text-2xl">Vagas de Estágios</h1>
        <p className="text-black text-center">
          Encontre o estágio dos seus sonhos e comece a trilhar o caminho para o
          sucesso profissional! Não perca mais tempo procurando vagas
          manualmente, baixe agora e comece a construir seu futuro!
        </p>
      </div>
      <div className="w-full gap-2">
        <Link to={"/entrar"} className="button btn btn-primary">
          Entrar
        </Link>
        <Link to={"/cadastro"} className="button btn btn-secondary">
          Se cadastrar
        </Link>
      </div>
    </div>
  );
}
