import { useLoaderData } from "react-router-dom";
import { GradientCurve } from "../common/gradientCurve";
import { Internship } from "../types/internship";

export function InternshipPage() {
  const internship = useLoaderData() as Internship;
  return (
    <div className="items-center p-2">
      <GradientCurve offset="large" />
      <div className="w-full max-w-xl gap-4">
        <h1 className="font-semibold text-xl text-green-700">
          {internship.enterprise.name}
        </h1>
        <div>
          <img
            alt="enterprise"
            src={internship.enterprise.picture}
            className="w-full h-20 max-h-40 rounded-lg object-fit mb-2 shadow"
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
