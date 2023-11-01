import { useEffect, useState } from "react";
import { api } from "../api/api";
import { GradientCurve } from "../common/gradientCurve";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";
import { SearchInput } from "./searchInput";

export function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>();

  async function getInternships() {
    const res = await api.get<Internship[]>("/internships");
    setInternships(res.data);
  }

  useEffect(() => {
    getInternships();
  }, []);

  // TODO replace this
  if (!internships) return <div>loading</div>;

  return (
    <div className="items-center p-4 gap-6">
      <div>
        <h1 className="font-semibold text-2xl text-green-700">
          Lista de Estágios Ativos
        </h1>
        <SearchInput />
      </div>
      <GradientCurve />
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
        {internships.map((internship) => {
          return <InternshipsItem internship={internship} />;
        })}
      </div>
    </div>
  );
}
