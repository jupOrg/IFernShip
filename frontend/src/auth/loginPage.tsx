import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GradientCurve } from "../common/gradientCurve";
import { User } from "../types/user";
import { useAuth } from "./authContext";

type FieldValues = Pick<User, "email" | "password">;

export function LoginPage() {
  const { login, setMessageError, setModalVisible } = useAuth();
  const { register, handleSubmit } = useForm<FieldValues>();
  
  const navigate = useNavigate();

  async function submit({ email, password }: FieldValues) {
    try {
      const response = await login(email, password);
      if (response.token) {
        navigate("/estagios");
      }
    } catch (error) {
      if (error.name === "AxiosError") {
        const { data, status } = error.response;
        if (status !== 201) {
          const { message } = data;
          setMessageError(message);
          setModalVisible(true);
        }
      }
    }
  }

  return (
    <div className="items-center p-4 flex-1 justify-around">
      <GradientCurve />
      <div className="items-center gap-4 max-w-md">
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
              data-cy="login-email"
              {...register("email")}
              className="default-input rounded-full flex-1 pl-8"
            />
          </div>
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
          <button type="submit" className="default-submit" data-cy="login-save">
            Entrar
          </button>
        </form>
      </div>
      <div className="w-full grid grid-cols-2 text-center">
        <Link className="self-end" to="/recuperar-senha">
          Esqueceu a senha?
        </Link>
        <Link className="self-end" to="/cadastro">
          Se cadastrar
        </Link>
      </div>
    </div>
  );
}
