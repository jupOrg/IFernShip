import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";

export function CreateInternshipPage() {
  const companies = ["company 1", "company 2", "company 3"];
  const courses = ["course 1", "course 2", "course 3"];

  return (
    <div>
      <GradientCurve />
      <div className="items-center p-4">
        <div className="w-full max-w-xl gap-6">
          <h1 className="page-header">
            <GoBackArrow to="/estagios" />
            Cadastrar estágio
          </h1>
          <form className="gap-2 flex flex-col">
            <textarea
              rows={3}
              className="default-input"
              placeholder="Perfil do profissional"
            />
            <textarea
              rows={3}
              className="default-input"
              placeholder="Perfil da vaga"
            />
            <input
              type="text"
              className="default-input"
              placeholder="Benefícios"
            />
            <select className="default-input">
              <option value="" disabled selected>
                Estilo de trabalho
              </option>
              <option value="isPerson">Presencial</option>
              <option value="remote">Remoto</option>
            </select>
            <select className="default-input">
              <option value="" disabled selected>
                Curso
              </option>
              {courses.map((course) => (
                <option value={course}>{course}</option>
              ))}
            </select>
            <input type="text" className="default-input" placeholder="Cargo" />
            <input
              type="number"
              className="default-input"
              placeholder="Carga horária semanal"
            />
            <select className="default-input">
              <option value="" disabled selected>
                Empresa
              </option>
              {companies.map((company) => (
                <option value={company}>{company}</option>
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
