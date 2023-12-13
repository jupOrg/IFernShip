import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";
import { Internship } from "../types/internship";

export function InternshipPage() {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship>();

  async function getInternship() {
    const res = await api.get<Internship>("/internships/" + id);
    setInternship(res.data);
  }

  useEffect(() => {
    getInternship();
  }, []);

  if (!internship) return <LoadingPlaceholder />;

  return (
    <div className="items-center flex-1">
      <div className="w-full max-w-xl gap-4">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          {internship.office}
        </h1>
        <div>
          <img
            alt="enterprise"
            src={internship.enterprise.picture}
            className="w-full h-32 max-h-40 rounded-lg object-fit mb-2 shadow bg-black/10"
          />
        </div>
        <h1 className="font-semibold text-xl text-green-700">
          Sobre a empresa
        </h1>
        <div className="gap-2">
          {internship.enterprise.description.split("\n").map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
