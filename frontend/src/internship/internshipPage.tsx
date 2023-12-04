import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createApiInstance } from "../api/api";
import { GoBackArrow } from "../common/goBackArrow";
import { GradientCurve } from "../common/gradientCurve";
import { Internship } from "../types/internship";
import { useAuth } from "../auth/authContext";
import { SplashPage } from "../intro/splashPage";

export function InternshipPage() {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship>();

  const { token } = useAuth();
  const api = createApiInstance(token);

  async function getInternship() {
    const res = await api.get<Internship>("/internship/" + id);
    setInternship(res.data);
  }

  useEffect(() => {
    getInternship();
  }, []);

  // TODO replace it
  if (!internship) return <SplashPage />;

  return (
    <div className="items-center p-2">
      <GradientCurve />
      <div className="w-full max-w-xl gap-4">
        <h1 className="page-header">
          <GoBackArrow to="/estagios" />
          {internship.enterprise.name}
        </h1>
        <div>
          <img
            alt="enterprise"
            src={internship.enterprise.picture}
            className="w-full h-32 max-h-40 rounded-lg object-fit mb-2 shadow"
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
