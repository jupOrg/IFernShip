import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown, FaEnvelope, FaUser } from "react-icons/fa";
import * as yup from "yup";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { useModal } from "../common/useModal";
import { UserRoleBadge } from "../common/userRoleBadge";
import { courses } from "../data/courses";
import { User } from "../types/user";
import { useAuth } from "./authContext";

const schema = yup.object({
  name: yup.string().required("É necessário informar um nome"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É necessário informar um email"),
  course: yup
    .string()
    .required("É necessário informar um Curso")
    .oneOf(courses, "Selecione um estilo de trabalho válido"),
  picture: yup
    .mixed<File>()
    .test("required", "Por favor, selecione uma imagem", (value) => {
      return !!value && !!value.name;
    })
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => !value || (value && value.type?.includes("image/")),
    ),
});

type FieldValues = Pick<User, "email" | "name" | "picture" | "course">;

export function UserPage() {
  const [imageSrc, setImageSrc] = useState();
  const { user } = useAuth();
  const { Modal, openModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  useState(() => {
    setValue("course", user?.course);
    setValue("email", user?.email);
    setValue("name", user?.name);
    setImageSrc(user?.picture);
  }, []);

  if (!user) return null;

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const listFiles = event.target.files as FileList;
    const fileSelect = listFiles[0];
    setValue("picture", fileSelect);
    convert2base64(fileSelect);
  }

  async function convert2base64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result?.toString());
    };
    reader.readAsDataURL(file);
  }

  async function submit(fields: FieldValues) {
    try {
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      await api.patch(`/users/${user?.id}`, formData);
      console.log("here");
      openModal();
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        const { data, status }: AxiosResponse = error.response;
        if (status !== 201) {
          const message = data?.message || data;
          setError("email", { type: "custom", message });
        }
      }
    }
  }

  return (
    <div className="items-center flex-1">
      <div className="w-full max-w-md gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Editar dados
        </h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-6 w-full p-2"
        >
          <div className="gap-2 items-center">
            <label {...register("picture")}>
              <input
                type="file"
                className="h-0 w-0 opacity-0"
                onChange={handleFileChange}
              />
              <img
                alt="user image"
                src={imageSrc}
                className="rounded-full w-24 aspect-square bg-black/10 cursor-pointer"
              />
            </label>
            <UserRoleBadge role={user.role} />
          </div>
          <div className="gap-2">
            <div className="input-icon-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Nome"
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
              <select
                className="default-input bg-slate-50 rounded-full flex-1 pl-8 appearance-none"
                {...register("course")}
              >
                <option value="" disabled>
                  Curso
                </option>
                {courses.map((course, index) => (
                  <option value={course} key={course + index}>
                    {course}
                  </option>
                ))}
              </select>
              <FaChevronDown className="input-icon" />
            </div>
            {errors.course && (
              <div className="error-message">{errors.course.message}</div>
            )}
          </div>
          <div className="gap-2">
            <div className="input-icon-container">
              <input
                disabled
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="default-input rounded-full flex-1 pl-8"
              />
              <FaEnvelope className="input-icon" />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="default-submit btn mt-8"
            data-cy="edit-save"
          >
            Salvar
          </button>
        </form>
      </div>
      <Modal
        title="Dados atualizado com sucesso"
        callbackClose={() => window.location.reload()}
      />
    </div>
  );
}
