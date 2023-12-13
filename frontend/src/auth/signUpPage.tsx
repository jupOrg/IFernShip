import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { api } from "../api/api";
import { Logo } from "../common/logo";
import { Role } from "../types/role";
import { User } from "../types/user";
import { useAuth } from "./authContext";

type FieldValues = Pick<User, "email" | "name" | "password">;

const schema = object({
  name: string().required(),
  password: string().required(),
  email: string().required().email(),
});

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
  const { login } = useAuth();

  const { state } = useLocation();
  const role: Role = state ? state : "student";

  async function submit({ name, email, password }: FieldValues) {
    try {
      const res = await api.post("/auth/sign-up", {
        name,
        role,
        email,
        password,
        confirmPassword: password,
        course: "ADS",
      });
      if (!res) {
        throw { message: "Email já está em uso" };
      }
      const response = await login(email, password);
      if (response.token) {
        navigate("/internships");
      }
    } catch (err) {
      const { message } = err;
      if (message) {
        setError("email", { type: "custom", message });
      }
    }
  }

  return (
    <div className="flex-1 bg-curve-left-primary justify-center p-2">
      <Logo />
      <div className="w-full items-center">
        <div className="items-center gap-6 flex-grow-1 w-full max-w-md">
          <div className="items-center gap-10">
            <div className="gap-4">
              <h1 className="font-semibold text-center text-4xl ">
                Se cadastre
              </h1>
              <p className="text-black text-center text-lg 2xl:text-2xl">
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
                  <div className="error-message">{errors.name.message}</div>
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
                  <div className="error-message">{errors.email.message}</div>
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
                  <div className="error-message">{errors.password.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="default-submit btn"
                data-cy="register-save"
              >
                Entrar
              </button>
            </form>
          </div>
          <div>
            <Link className="self-center underline" to="/entrar">
              Já possui uma conta?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
