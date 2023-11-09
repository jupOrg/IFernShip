import { FormEvent } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export function LoginPage() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="items-center gap-4 p-4">
      <img src="/ifpb-logo.svg" alt="IFPB" width={100} />
      <h1 className="font-semibold text-2xl">Bem-Vindo de Volta</h1>
      <div className="text-center">
        Faça login e tenha acesso a um mundo de oportunidades profissionais com
        nosso aplicativo de vagas de estágio. Não perca mais tempo, comece agora
        a buscar a vaga perfeita para você!
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <div className="input-icon-container">
          <FaUser className="input-icon"></FaUser>
          <input
            type="email"
            placeholder="Email"
            className="default-input rounded-full flex-1 pl-8"
          />
        </div>
        <div className="input-icon-container">
          <FaLock className="input-icon"></FaLock>
          <input
            type="password"
            placeholder="Senha"
            className="default-input rounded-full flex-1 pl-8"
          />
        </div>
        <Link className="self-end" to="/recuperar-senha">
          Esqueceu a senha?
        </Link>
        <button type="submit" className="default-submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
