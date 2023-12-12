import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";
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
  if (!internships) return <></>;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
      {internships.map((internship) => {
        return <InternshipsItem internship={internship} key={internship.id} />;
      })}
      <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
        <Link
          to="/estagios/criar"
          className="button bg-green-600 text-white p-2 rounded"
        >
          Adicionar estágio
        </Link>
      </div>
    </div>
  );
}
