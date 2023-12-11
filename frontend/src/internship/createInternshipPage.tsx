import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { useEffect, useState } from "react";
import { Enterprise } from "../types/enterprise";
import { createApiInstance } from "../api/api";
import { useAuth } from "../auth/authContext";
import { Internship } from "../types/internship";

type Values = Omit<Internship, "id" | "enterprise" | "isActive">;
type FieldValues = Values & { enterpriseId: string };

const schema = yup.object({
  profissional_profile: yup
    .string()
    .required("É requerido repassar um perfil de profissional"),
  description: yup
    .string()
    .required("É requerido repassar um perfil de profissional"),
  work_style: yup
    .string()
    .required("Selectione um estilo de trabalho")
    .oneOf(
      ["isPerson", "remote", "hibrid"],
      "Selecione um estilo de trabalho válido"
    ),
  course: yup.string().required("Selecione um curso"),
  office: yup.string().required("É nescessario repassar o Cargo"),
  weekly_workload: yup
    .number()
    .required("É nescessario passar a quantidade de horas trabalhadas")
    .positive("A carga horária deve ser um número positivo"),
  enterpriseId: yup.string().required("Selecione uma empresa"),
});

export function CreateInternshipPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });
  const [companies, setCompanies] = useState<Enterprise[]>([]);
  const courses = [
    "ADS",
    "Engenharia e Controle de Automação",
    "Engenharia Civil",
    "Matemática",
  ];

  const { token, handleModal, closeModal } = useAuth();

  const api = createApiInstance(token);
  const navigate = useNavigate();

  useEffect(() => {
    const main = async () => {
      const res = await api.get("/enterprises");
      setCompanies(res.data);
    };
    main();
  }, []);

  async function submit(interneship: FieldValues) {
    const res = await api.post("/internships", interneship);
    if (res.status === 201) {
      handleModal?.({
        isVisible: true,
        title: "Empressa registrada com Sucesso",
        callbackClose: () => {
          navigate("/");
          closeModal();
        },
      });
    }
  }

  return (
    <div>
      <GradientCurve />
      <div className="items-center p-4">
        <div className="w-full max-w-xl gap-6">
          <h1 className="page-header">
            <GoBackArrow to="/estagios" />
            Cadastrar estágio
          </h1>
          <form className="gap-2 flex flex-col" onSubmit={handleSubmit(submit)}>
            <textarea
              rows={3}
              className="default-input"
              placeholder="Perfil do profissional"
              {...register("profissional_profile")}
            />
            <textarea
              rows={3}
              className="default-input"
              placeholder="Descrição da Vaga"
              {...register("description")}
            />
            <select className="default-input" {...register("work_style")}>
              <option value="" disabled selected>
                Estilo de trabalho
              </option>
              <option value="isPerson">Presencial</option>
              <option value="hibrid">Hibrido</option>
              <option value="remote">Remoto</option>
            </select>
            <select className="default-input" {...register("course")}>
              <option value="" disabled selected>
                Curso
              </option>
              {courses.map((course) => (
                <option value={course}>{course}</option>
              ))}
            </select>
            <input
              type="text"
              className="default-input"
              placeholder="Cargo"
              {...register("office")}
            />
            <input
              type="number"
              className="default-input"
              placeholder="Carga horária semanal"
              {...register("weekly_workload")}
            />
            <select className="default-input" {...register("enterpriseId")}>
              <option value="" disabled selected>
                Empresa
              </option>
              {companies.map((company) => (
                <option value={company.id}>{company.name}</option>
              ))}
            </select>
            <button type="submit" className="default-submit">
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
