import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";

type FieldValues = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<FieldValues>();

  async function submit({ email, password }: FieldValues) {
    await login(email, password);
  }

  return (
    <div className="items-center p-4">
      <div className="items-center gap-4 max-w-md">
        <img src="/ifpb-logo.svg" alt="IFPB" width={100} />
        <h1 className="font-semibold text-2xl">Bem-Vindo de Volta</h1>
        <div className="text-center">
          Faça login e tenha acesso a um mundo de oportunidades profissionais
          com nosso aplicativo de vagas de estágio. Não perca mais tempo, comece
          agora a buscar a vaga perfeita para você!
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-2 w-full"
        >
          <div className="input-icon-container">
            <FaUser className="input-icon"></FaUser>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="default-input rounded-full flex-1 pl-8"
            />
          </div>
          <div className="input-icon-container">
            <FaLock className="input-icon"></FaLock>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
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
    </div>
  );
}
