import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { AxiosError } from "axios";
import { GradientCurve } from "../common/gradientCurve";
import { Logo } from "../common/logo";
import { User } from "../types/user";
import { useAuth } from "./authContext";

type FieldValues = Pick<User, "email" | "password">;

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É necessário informar um email"),
  password: yup.string().required("É necessário informar a senha"),
});

export function LoginPage() {
  const { login, handleModal } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  async function submit({ email, password }: FieldValues) {
    try {
      const response = await login(email, password);
      if (response.token) {
        navigate("/estagios");
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.code === "ERR_NETWORK") {
        handleModal?.({
          title: "BackEnd desligado",
          message:
            "A aplicação não consegue se comunicar com nenhum backend, imposibilitando essa operação",
          isVisible: true,
        });
      } else if (error.response) {
        const { status } = error.response;
        if (status !== 201) {
          setError("email", {
            type: "customn",
            message: "Usuário ou senha incorreto",
          });
          setError("password", {
            type: "customn",
            message: "Usuário ou senha incorreto",
          });
        }
      }
    }
  }

  return (
    <div className="flex-1 bg-curve-left-primary justify-center p-2">
      <Logo />
      <div className="items-center flex-1 justify-around">
        <GradientCurve />
        <div className="items-center gap-8 max-w-md">
          <h1 className="font-semibold text-2xl 2xl:text-4xl">
            Bem-Vindo de Volta
          </h1>
          <div className="text-center 2xl:text-2xl">
            Faça login e tenha acesso a um mundo de oportunidades profissionais
            com nosso aplicativo de vagas de estágio. Não perca mais tempo,
            comece agora a buscar a vaga perfeita para você!
          </div>
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-6 w-full"
          >
            <div className="gap-2">
              <div className="input-icon-container">
                <input
                  type="email"
                  placeholder="E-mail"
                  data-cy="login-email"
                  {...register("email")}
                  className="default-input rounded-full flex-1 pl-8"
                />
                <FaUser className="input-icon"></FaUser>
              </div>
              {errors.email && (
                <div className="error-message">{errors.email.message}</div>
              )}
            </div>
            <div className="gap-2">
              <div className="input-icon-container">
                <FaLock className="input-icon"></FaLock>
                <input
                  type="password"
                  placeholder="Senha"
                  data-cy="login-password"
                  {...register("password")}
                  className="default-input rounded-full flex-1 pl-8"
                />
              </div>
              {errors.password && (
                <div className="error-message">{errors.password.message}</div>
              )}
            </div>
            <button
              type="submit"
              className="default-submit"
              data-cy="login-save"
            >
              Entrar
            </button>
          </form>
          <div>
            <Link className="self-end underline" to="/cadastro">
              Não tem conta? Cadastre-se
            </Link>
            {/* <Link className="self-end" to="/recuperar-senha">
              Esqueceu a senha?
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
