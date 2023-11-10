import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { GradientCurve } from "../common/gradientCurve";
import { Internship } from "../types/internship";

export function InternshipPage() {
  const internship = useLoaderData() as Internship;
  return (
    <div className="items-center p-2">
      <GradientCurve offset="large" />
      <div className="w-full max-w-xl gap-4">
        <div className="flex-row items-center text-green-700">
          <Link to="/internships" className="inline p-2">
            <FaArrowLeft />
          </Link>
          <h1 className="font-semibold text-xl">
            {internship.enterprise.name}
          </h1>
        </div>
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
