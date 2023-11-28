import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { createApiInstance } from "../api/api";
import { Role } from "../types/role";
import { User } from "../types/user";
import { useAuth } from "./authContext";

type FieldValues = Pick<User, "email" | "name" | "password">;

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É nescessário informar um email"),
  password: yup.string().required("É nescessário informar a senha"),
});

const api = createApiInstance();

export function RegisterPage() {
  const { register, handleSubmit } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  async function submit({ name, email, password }: FieldValues) {
    const role: Role = "STUDENT";
    const res = await api.post("/register", {
      name,
      role,
      email,
      password,
      confirmPassword: password,
      course: "ADS",
      type: "estagiário",
    });
    const response = await login(email, password);
    if (response.token) {
      navigate("/estagios");
    }
  }

  return (
    <div className="items-center bg-curve-left-primary flex-1 justify-around p-4">
      <div className="items-center gap-4 flex-grow-1 w-full max-w-sm">
        <div className="items-center gap-8">
          <div className="gap-4">
            <h1 className="font-semibold text-center text-2xl">Se cadastre</h1>
            <p className="text-black text-center">
              Se cadastre e tenha acesso a um mundo de oportunidades
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
                data-cy="register-name"
                {...register("name")}
                className="default-input rounded-full flex-1 pl-8"
              />
            </div>
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
      <div>
        <Link className="self-end" to="/entrar">
          Já possui uma conta?
        </Link>
      </div>
    </div>
  );
}
