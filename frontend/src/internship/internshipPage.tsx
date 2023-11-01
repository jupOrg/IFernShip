import { useLoaderData } from "react-router-dom";
import { GradientCurve } from "../common/gradientCurve";
import { Internship } from "../types/internship";

export function InternshipPage() {
  const internship = useLoaderData() as Internship;
  return (
    <div className="items-center p-2">
      <GradientCurve />
      <div className="w-full max-w-xl gap-4">
        <h1 className="font-semibold text-xl text-green-700">
          {internship.enterprise.name}
        </h1>
        <div>
          <img
            alt="enterprise"
            src="/enterprise mock.svg"
            className="max-h-40 rounded-lg object-cover mb-2"
          />
        </div>
        <h1 className="font-semibold text-xl text-green-700">
          Sobre a empresa
        </h1>
        <div>{internship.enterprise.description}</div>
      </div>
    </div>
  );
}
