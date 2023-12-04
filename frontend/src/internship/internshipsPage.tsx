import { useEffect, useState } from "react";
import { createApiInstance } from "../api/api";
import { GradientCurve } from "../common/gradientCurve";
import { NavBar } from "../nav/navBar";
import { TopBar } from "../nav/topBar";
import { Internship } from "../types/internship";
import { InternshipsItem } from "./internshipItem";
import { useAuth } from "../auth/authContext";
import { SplashPage } from "../intro/splashPage";

export function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>();

  const { token } = useAuth()
  const api = createApiInstance(token);

  async function getInternships() {
    const res = await api.get<Internship[]>("/internship");
    setInternships(res.data);
  }

  useEffect(() => {
    getInternships();
  }, []);

  // TODO replace this
  if (!internships) return <SplashPage />;

  return (
    <div className="flex flex-row min-h-screen">
      <GradientCurve />
      <NavBar />
      <div className="items-center p-2 gap-4 flex-1">
        <TopBar />
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
