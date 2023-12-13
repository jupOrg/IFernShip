import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../common/errorMessage";
import { useResource } from "../common/useResource";
import { courses } from "../data/courses";
import { Enterprise } from "../types/enterprise";
import { Internship } from "../types/internship";
import { internshipSchema } from "./internshipSchema";

type Props = {
  internship?: Internship;
  submit: (internship: Internship) => void;
};

export function InternshipForm({ submit, internship }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Internship>({
    defaultValues: internship,
    resolver: yupResolver(internshipSchema),
  });

  const enterprises = useResource<Enterprise[]>("/enterprises");

  return (
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
        {(enterprises || []).map((enterprise) => (
          <option value={enterprise.id} key={enterprise.id}>
            {enterprise.name}
          </option>
        ))}
      </select>
      <ErrorMessage error={errors.enterpriseId} />
      <button type="submit" className="default-submit">
        Salvar
      </button>
    </form>
  );
}
