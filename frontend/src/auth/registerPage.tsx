import { useForm } from "react-hook-form";
import { FaArrowDown, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { registerUser } from "./userServices";

type FieldValues = Pick<User, "email" | "name" | "role" | "password">;

export function RegisterPage() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const navigate = useNavigate();

  async function submit({ name, role, email, password }: FieldValues) {
    await registerUser({ name, role, email, password } as User);
    navigate("/estagios");
  }

  return (
    <div className="items-center bg-curve-left-primary flex-1 justify-center p-4">
      <div className="items-center gap-4 flex-grow-1 w-full max-w-sm">
        <div className="items-center gap-8">
          <div className="gap-4">
            <h1 className="font-semibold text-center">Cadastre-se</h1>
            <p className="text-black text-center">
              Cadastre-se e tenha acesso a um mundo de oportunidades
              profissionais com nosso aplicativo de vagas de estágio. Não perca
              mais tempo, comece agora a buscar a vaga perfeita para você!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-2 w-full"
          >
            <div className="input-icon-container">
              <FaUser className="input-icon"></FaUser>
              <input
                type="text"
                placeholder="Nome"
                {...register("name")}
                className="default-input rounded-full flex-1 pl-8"
              />
            </div>
            <div className="input-icon-container">
              <input
                type="text"
                placeholder="Curso"
                {...register("role")}
                className="default-input rounded-full flex-1 pl-4"
              />
            </div>
            <div className="input-icon-container">
              <input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="default-input rounded-full flex-1 pl-4 pr-8"
              />
              <FaArrowDown className="input-icon-rigth"></FaArrowDown>
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
            <button type="submit" className="default-submit btn mt-8">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
