import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { ErrorMessage } from "../common/errorMessage";
import { GoBackArrow } from "../common/goBackArrow";
import { useModal } from "../common/useModal";
import { courses } from "../data/courses";
import { Enterprise } from "../types/enterprise";
import { Internship } from "../types/internship";
import { internshipSchema } from "./internshipSchema";

type Values = Omit<Internship, "id" | "enterprise" | "isActive">;
type FieldValues = Values & { enterpriseId: string };

export function CreateInternshipPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(internshipSchema),
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
          <input
            type="text"
            className="default-input"
            placeholder="Cargo"
            {...register("office")}
          />
          <ErrorMessage error={errors.office} />

          <textarea
            rows={3}
            className="default-input"
            placeholder="Descrição da Vaga"
            {...register("description")}
          />
          <ErrorMessage error={errors.description} />

          <textarea
            rows={3}
            className="default-input"
            placeholder="Perfil do profissional"
            {...register("profissionalProfile")}
          />
          <ErrorMessage error={errors.profissionalProfile} />

          <input
            type="number"
            className="default-input"
            placeholder="Carga horária semanal"
            {...register("weeklyWorkload")}
          />
          <ErrorMessage error={errors.weeklyWorkload} />

          <select className="default-input" {...register("workStyle")}>
            <option value="" disabled selected>
              Estilo de trabalho
            </option>
            <option value="isPerson">Presencial</option>
            <option value="hybrid">Hibrido</option>
            <option value="remote">Remoto</option>
          </select>
          <ErrorMessage error={errors.workStyle} />

          <select className="default-input" {...register("course")}>
            <option value="" disabled selected>
              Curso
            </option>
            {courses.map((course) => (
              <option value={course}>{course}</option>
            ))}
          </select>
          <ErrorMessage error={errors.course} />

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
          <ErrorMessage error={errors.enterpriseId} />

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
