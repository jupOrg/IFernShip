export function ChoiceAuthenticateSM() {
  return (
    <div className="min-h-screen gradient-page items-center p-4 gap-40">
      <picture className="w-full flex">
        <img src="./ifpb-logo-white.svg" alt="logo" className="w-[6.5rem]" />
      </picture>
      <div className="gap-2 items-center max-w-lg">
        <h1 className="font-bold text-5xl">Vagas de Estágios</h1>
        <p className="text-black text-2xl text-center">
          Encontre o estágio dos seus sonhos e comece a trilhar o caminho para o
          sucesso profissional! Não perca mais tempo procurando vagas
          manualmente, baixe agora e comece a construir seu futuro!
        </p>
      </div>
      <div className="flex-row gap-4 w-full max-w-lg">
        <button className="btn btn-primary py-4">
          Entrar
        </button>
        <button className="btn btn-secondary py-4">
          Registrar-se
        </button>
      </div>
    </div>
  );
}
