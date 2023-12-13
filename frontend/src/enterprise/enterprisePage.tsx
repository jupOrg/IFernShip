import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { useResource } from "../common/useResource";
import { RemoveButton } from "../internship/removeButton";
import { SeparateParagraphs } from "../separateParagraphs";
import { Enterprise } from "../types/enterprise";
import { InternshipLinks } from "./internshipLinks";

export function EnterprisePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const enterprise = useResource<Enterprise>("/enterprises/" + id);

  async function remove() {
    await api.delete("/enterprises/" + id);
    navigate("/empresas");
  }

  if (!enterprise) {
    return <LoadingPlaceholder />;
  }

  return (
    <div className="items-center flex-1 p-2">
      <div className="w-full max-w-xl gap-4">
        <section>
          <h1 className="page-header">
            <GoBackArrow to="/empresas" />
            {enterprise.name}
          </h1>
          <img
            alt={enterprise.name}
            src={enterprise.picture}
            className="h-72 object-cover rounded-lg bg-black/10"
          />

          <div className="flex-row gap-2 pt-2">
            <RemoveButton resourceText="essa empresa" remove={remove} />
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-xl text-green-700">
            Sobre a empresa
          </h2>
          <SeparateParagraphs text={enterprise.description} />
        </section>
        <section>
          <h2 className="font-semibold text-xl text-green-700">Estágios</h2>
          <InternshipLinks internships={enterprise.internships} />
        </section>
        <section>
          <div className="flex-row gap-2">
            <h3 className="font-semibold text-green-700">Email:</h3>
            {enterprise.email}
          </div>
          <div className="flex-row gap-2">
            <h3 className="font-semibold text-green-700">CNPJ:</h3>
            {enterprise.cnpj}
          </div>
        </section>
      </div>
    </div>
  );
}
