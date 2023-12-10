import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { FaChevronDown, FaEnvelope, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { useState } from "react";
import { createApiInstance } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { UserRoleBadge } from "../common/userRoleBadge";
import { User } from "../types/user";
import { useAuth } from "./authContext";

const schema = yup.object({
  name: yup.string().required("É nescessario informar um nome"),
  email: yup
    .string()
    .email("Digite um email valido")
    .required("É nescessário informar um email"),
  course: yup.string().required("É nescessario informar um Curso"),
});

type FieldValues = Pick<User, "email" | "name" | "picture" | "course">;

export function UserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const { user, handleModal, token } = useAuth();

  const api = createApiInstance(token);

  useState(() => {
    setValue("course", user?.course);
    setValue("email", user?.email);
    setValue("name", user?.name);
  }, []);

  if (!user) return null;

  async function submit({ name, email, course }: FieldValues) {
    try {
      const response = await api.patch(`/users/${user?.id}`, {
        name,
        email,
        course,
      });
      if (response.status === 201) {
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
          setError("email", { type: "customn", message });
        }
      }
    }
  }

  return (
    <div className="items-center justify-between w-full p-6 hidden md:flex">
      <GradientCurve />
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Editar dados
        </h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-6 w-full"
        >
          <div className="gap-2 items-center">
            <img
              alt="user image"
              src={`https://github.com/${user.picture}.png`}
              className="rounded-full w-24 aspect-square border-2 border-white"
            />
            <UserRoleBadge role={user.role} />

            <div className="input-icon-container">
              <FaUser className="input-icon"></FaUser>
              <input
                type="text"
                placeholder="Nome"
                data-cy="edit-name"
                {...register("name")}
                className="default-input rounded-full flex-1 pl-8 2xl:h-"
              />
            </div>
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div className="gap-2">
            <div className="input-icon-container">
              <input
                disabled
                type="email"
                placeholder="E-mail"
                data-cy="edit-email"
                {...register("email")}
                className="default-input rounded-full flex-1 pl-8"
              />
              <FaEnvelope className="input-icon" />
            </div>
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="gap-2">
            <div className="input-icon-container">
              <input
                disabled
                type="course"
                placeholder="Curso"
                data-cy="edit-course"
                {...register("course")}
                className="default-input rounded-full flex-1 pl-8"
              />
              <FaChevronDown className="input-icon" />
            </div>
            {errors.course && (
              <p className="error-message">{errors.course.message}</p>
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
    </div>
  );
}
