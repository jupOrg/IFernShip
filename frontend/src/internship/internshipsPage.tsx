import { useEffect, useState } from "react";
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
  if (!internships) return <div>loading</div>;

  return (
    <div className="items-center p-2">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
        {internships.map((internship) => {
          return <InternshipsItem internship={internship} />;
        })}
      </div>
    </div>
  );
}
