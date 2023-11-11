import { useEffect, useState } from "react";
import { api } from "../api/api";
import { GradientCurve } from "../common/gradientCurve";
import { SearchInput } from "../common/searchInput";
import { NavBar } from "../nav/navBar";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";

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
    <div className="flex flex-row">
      <NavBar />
      <div className="items-center p-4 gap-4 flex-1">
        <h1 className="font-semibold text-xl">Lista de Estágios Ativos</h1>
        <SearchInput />
        <GradientCurve />
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
          {internships.map((internship) => {
            return (
              <InternshipsItem internship={internship} key={internship.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
