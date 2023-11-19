import { useForm } from "react-hook-form";
import { FaLock, FaUser, FaArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GradientCurve } from "../common/gradientCurve";
import { registerUser } from "./userServices";
import { User } from "../types/user";
import { Logo } from "../common/logo";

type FieldValues = Pick<User, "email" | "name" | "role" | "password">;

export function RegisterPage() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const navigate = useNavigate();

  async function submit({ name, role, email, password }: FieldValues) {
    await registerUser({ name, role, email, password } as User);
    navigate("/estagios");
  }

  return (
    <div className="items-center p-4 bg-curve-left-primary min-h-screen">
      {/* <GradientCurve /> */}
      <div className="md:flex-row w-full gap-8 md:gap-0">
        <picture className="hidden md:flex justify-center w-96">
          <Logo />
        </picture>

        <picture className="w-full flex justify-center md:hidden">
          <img src="./ifpb-logo.svg" alt="logo" className="w-32" />
        </picture>

        <div className="items-center gap-4 flex-grow-1 w-full">
          <div className="max-w-4xl items-center gap-8">
            <div className="gap-4">
              <h1 className="font-semibold text-7xl text-center">
                Cadastre-se
              </h1>
              <p className="text-black text-3xl text-center lg:px-6">
                Cadastre-se e tenha acesso a um mundo de oportunidades
                profissionais com nosso aplicativo de vagas de estágio. Não
                perca mais tempo, comece agora a buscar a vaga perfeita para
                você!
              </p>
            </div>
            <form
              onSubmit={handleSubmit(submit)}
              className="flex flex-col gap-2 w-10/12"
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
    </div>
  );
}
