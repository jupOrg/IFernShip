import { useEffect, useState } from "react";
import { createApiInstance } from "../api/api";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";
import { useAuth } from "../auth/authContext";
import { useAuth } from "../auth/authContext";
import { GradientCurve } from "../common/gradientCurve";
import { NavBar } from "../nav/navBar";
import { TopBar } from "../nav/topBar";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";
import { LoadingPlaceholder } from "../common/loadingPlaceholder";

export function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>();

  const { token } = useAuth();
  const api = createApiInstance(token);

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
    </div>
  );
}
