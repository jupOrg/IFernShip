import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { useModal } from "../common/useModal";
import { courses } from "../data/courses";
import { Enterprise } from "../types/enterprise";
import { Internship } from "../types/internship";

type Values = Omit<Internship, "id" | "enterprise" | "isActive">;
type FieldValues = Values & { enterpriseId: string };

const schema = yup.object({
  profissionalProfile: yup
    .string()
    .required("É requerido repassar um perfil de profissional"),
  description: yup
    .string()
    .required("É requerido repassar um perfil de profissional"),
  workStyle: yup
    .string()
    .required("Selectione um estilo de trabalho")
    .oneOf(
      ["isPerson", "remote", "hybrid"],
      "Selecione um estilo de trabalho válido",
    ),
  course: yup
    .string()
    .required("Selecione um curso")
    .oneOf(courses, "Selecione um estilo de trabalho válido"),
  office: yup.string().required("É nescessario repassar o Cargo"),
  weeklyWorkload: yup
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
  const { Modal, openModal } = useModal();

  const navigate = useNavigate();

  useEffect(() => {
    const main = async () => {
      const res = await api.get("/enterprises");
      setCompanies(res.data);
    };
    main();
  }, []);

  async function submit(interneship: FieldValues) {
    await api.post("/internships", interneship);
    openModal();
  }

  return (
    <div className="w-full items-center p-4">
      <div className="w-full max-w-xl gap-6">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          Adicionar estágio
        </h1>
        <form className="gap-2.5 flex flex-col" onSubmit={handleSubmit(submit)}>
          <div className="gap-2">
            <input
              type="text"
              className="default-input"
              placeholder="Cargo"
              {...register("office")}
            />
            {errors.office && (
              <div className="error-message">{errors.office.message}</div>
            )}
          </div>
          <div className="gap-2">
            <textarea
              rows={3}
              className="default-input"
              placeholder="Descrição da Vaga"
              {...register("description")}
            />
            {errors.description && (
              <div className="error-message">{errors.description.message}</div>
            )}
          </div>
          <div className="gap-2">
            <textarea
              rows={3}
              className="default-input"
              placeholder="Perfil do profissional"
              {...register("profissionalProfile")}
            />
            {errors.profissionalProfile && (
              <div className="error-message">
                {errors.profissionalProfile.message}
              </div>
            )}
          </div>
          <div className="gap-2">
            <input
              type="number"
              className="default-input"
              placeholder="Carga horária semanal"
              {...register("weeklyWorkload")}
            />
            {errors.weeklyWorkload && (
              <div className="error-message">
                {errors.weeklyWorkload.message}
              </div>
            )}
          </div>
          <div className="gap-2">
            <select className="default-input" {...register("workStyle")}>
              <option value="" disabled selected>
                Estilo de trabalho
              </option>
              <option value="isPerson">Presencial</option>
              <option value="hybrid">Hibrido</option>
              <option value="remote">Remoto</option>
            </select>
            {errors.workStyle && (
              <div className="error-message">{errors.workStyle.message}</div>
            )}
          </div>
          <div className="gap-2">
            <select className="default-input" {...register("course")}>
              <option value="" disabled selected>
                Curso
              </option>
              {courses.map((course) => (
                <option value={course}>{course}</option>
              ))}
            </select>
            {errors.course && (
              <div className="error-message">{errors.course.message}</div>
            )}
          </div>
          <div className="gap-2">
            <select className="default-input" {...register("enterpriseId")}>
              <option value="" disabled selected>
                Empresa
              </option>
              {companies.map((company) => (
                <option value={company.id} key={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
            {errors.enterpriseId && (
              <div className="error-message">{errors.enterpriseId.message}</div>
            )}
          </div>
          <button type="submit" className="default-submit">
            Adicionar
          </button>
        </form>
      </div>
      <Modal
        title="Estágio registrado com sucesso"
        callbackClose={() => {
          navigate("/estagios");
        }}
      />
    </div>
  );
}
