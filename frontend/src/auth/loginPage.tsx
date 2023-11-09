import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="items-center gap-4 p-4">
      <img src="/ifpb-logo.svg" alt="IFPB" width={100} />
      <h1 className="font-semibold text-2xl">Bem-Vindo de Volta</h1>
      <div className="text-center">
        Faça login e tenha acesso a um mundo de oportunidades profissionais com
        nosso aplicativo de vagas de estágio. Não perca mais tempo, comece agora
        a buscar a vaga perfeita para você!
      </div>
      <form className="flex flex-col gap-2 w-full">
        <div className="relative flex-row items-center">
          <FaUser className="absolute left-3 opacity-50"></FaUser>
          <input
            type="email"
            placeholder="Email"
            className="default-input rounded-full flex-1 pl-8"
          />
        </div>
        <div className="relative flex-row items-center">
          <FaLock className="absolute left-3 opacity-50"></FaLock>
          <input
            type="password"
            placeholder="Senha"
            className="default-input rounded-full flex-1 pl-8"
          />
        </div>
        <Link className="self-end" to="/cadastro">
          Esqueceu a senha?
        </Link>
        <button type="submit" className="default-submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
