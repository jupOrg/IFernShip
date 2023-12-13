import { useParams } from "react-router-dom";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { RemoveButton } from "../common/removeButton";
import { useResource } from "../common/useResource";
import { SeparateParagraphs } from "../separateParagraphs";
import { Internship } from "../types/internship";
import { vocabulary } from "../vocabulary";
import { SubscribeButton } from "./subscribeButton";

export function InternshipPage() {
  const { id } = useParams();
  const path = "/internships/" + id;
  const internship = useResource<Internship>(path);

  if (!internship) return <LoadingPlaceholder />;

  return (
    <div className="items-center flex-1 p-2">
      <div className="w-full max-w-xl gap-4">
        <section>
          <h1 className="page-header self-start">
            <GoBackArrow to="/estagios" />
            {internship.office}
          </h1>
          <img
            alt={internship.enterprise.name}
            src={internship.enterprise.picture}
            className="h-72 object-cover rounded-lg bg-black/10"
          />
          <div className="flex-row gap-2 pt-2">
            <RemoveButton
              path={path}
              redirect="/estagios"
              resource="internship"
            />
          </div>
        </section>
        <section>
          <h2 className="title">Descrição da vaga</h2>
          <div>{internship.description}</div>
        </section>
        <section>
          <h2 className="title">Modalidade de trabalho</h2>
          <div>{vocabulary[internship.workStyle]}</div>
        </section>
        <section>
          <h2 className="title">Perfil do profissional?</h2>
          <div>{internship.profissionalProfile}</div>
        </section>
        <div>
          <h2 className="title">
            Sobre a empresa {internship.enterprise.name}
          </h2>
          <SeparateParagraphs text={internship.enterprise.description} />
        </div>
      </div>
      <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
        <SubscribeButton internship={internship} />
      </div>
    </div>
  );
}
