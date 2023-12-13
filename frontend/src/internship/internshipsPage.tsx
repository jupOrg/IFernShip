import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/api";
import { useAuth } from "../auth/authContext";
import { SearchInput } from "../common/searchInput";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";

export function InternshipsPage() {
  const { user } = useAuth();
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
    <div className="items-center flex-1">
      <div className="sticky top-0 p-2 w-4/12">
        <SearchInput setData={setInternships} />
      </div>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl">
        {internships.map((internship) => {
          return (
            <InternshipsItem internship={internship} key={internship.id} />
          );
        })}
        {user?.role === "coordinator" && (
          <div className="fixed right-4 bottom-14 sm:right-8 sm:bottom-8">
            <Link to="/internships/create" className="button button-primary">
              Adicionar estágio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
