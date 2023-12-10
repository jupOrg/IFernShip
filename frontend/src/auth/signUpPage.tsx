import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { createApiInstance } from "../api/api";
import { Logo } from "../common/logo";
import { Role } from "../types/role";
import { User } from "../types/user";
import { useAuth } from "./authContext";
import { AxiosError, AxiosResponse } from "axios";

type FieldValues = Pick<User, "email" | "name" | "password">;

const schema = yup.object({
  name: yup.string().required("É nescessario informar um nome"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É nescessário informar um email"),
  password: yup.string().required("É nescessário informar a senha"),
});

const api = createApiInstance();

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { login, handleModal } = useAuth();

  const { state } = useLocation();
  const role: Role = state ? state : "student";

  async function submit({ name, email, password }: FieldValues) {
    try {
      await api.post("/auth/sign-up", {
        name,
        role,
        email,
        password,
        confirmPassword: password,
        course: "ADS",
      });
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
        const { data, status }: AxiosResponse = error.response;
        if (status !== 201) {
          const message = data?.message || data;
          console.log(message);
          setError("email", { type: "customn", message });
        }
      }
    }
  }

  return (
    <div className="pl-24 py-16 min-h-screen bg-curve-left-primary">
      <picture className="self-start ">
        <Logo />
      </picture>
      <div className="w-full items-center">
        <div className="items-center gap-6 flex-grow-1 w-full max-w-sm 2xl:max-w-xl 2xl:my-auto 2xl:ml-[34rem]">
          <div className="items-center gap-10">
            <div className="gap-4">
              <h1 className="font-semibold text-center text-2xl 2xl:text-4xl">
                Se cadastre
              </h1>
              <p className="text-black text-center 2xl:text-2xl">
                Se cadastre e tenha acesso a um mundo de oportunidades
                profissionais com nosso aplicativo de vagas de estágio. Não
                perca mais tempo, comece agora a buscar a vaga perfeita para
                você!
              </p>
            </div>
            <form
              onSubmit={handleSubmit(submit)}
              className="flex flex-col gap-6 w-full"
            >
              <div className="gap-2">
                <div className="input-icon-container">
                  <FaUser className="input-icon"></FaUser>
                  <input
                    type="text"
                    placeholder="Nome"
                    data-cy="register-name"
                    {...register("name")}
                    className="default-input rounded-full flex-1 pl-8 2xl:h-"
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="gap-2">
                <div className="input-icon-container">
                  <input
                    type="email"
                    placeholder="E-mail"
                    data-cy="register-email"
                    {...register("email")}
                    className="default-input rounded-full flex-1 pl-8"
                  />
                  <FaEnvelope className="input-icon" />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="gap-2">
                <div className="input-icon-container">
                  <FaLock className="input-icon"></FaLock>
                  <input
                    type="password"
                    placeholder="Senha"
                    data-cy="register-password"
                    {...register("password")}
                    className="default-input rounded-full flex-1 pl-8"
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="default-submit btn mt-8"
                data-cy="register-save"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
        <div className="w-full 2xl:max-w-xl 2xl:mb-10 2xl:mt-10 2xl:ml-[34rem]">
          <Link className="self-center" to="/entrar">
            Já possui uma conta?
          </Link>
        </div>
      </div>
    </div>
  );
}
