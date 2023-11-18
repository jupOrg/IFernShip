export function ChoiceAuthenticateSM() {
  return (
    <div className="min-h-screen to-green-500 from-cyan-500 bg-gradient-to-b justify-between items-center p-4">
      <picture className="w-full flex sm:justify-center">
        <img src="./ifpb-logo-white.svg" alt="logo" className="w-[6.5rem]" />
      </picture>
      <div className="gap-2 items-center max-w-xl">
        <h1 className="font-bold text-3xl">Vagas de Estágios</h1>
        {/* TODO replace the "baixe agora" */}
        <div>
          Encontre o estágio dos seus sonhos e comece a trilhar o caminho para o
          sucesso profissional! Não perca mais tempo procurando vagas
          manualmente, baixe agora e comece a construir seu futuro!
        </div>
      </div>
      <div className="flex-row gap-2 max-w-4xl">
        <button className="bg-blue-500 text-white rounded-full py-2 px-4">
          Entrar
        </button>
        <button className="bg-gray-500 text-white rounded-full py-2 px-4">
          Registrar-se
        </button>
      </div>
    </div>
  );
}
