import { useLoaderData } from "react-router-dom";
import { Internship } from "../types/internship";

export function InternshipPage() {
  const internship = useLoaderData() as Internship;
  return (
    <div className="items-center p-2">
      <div className="w-full max-w-xl gap-4">
        <h1 className="font-semibold text-xl text-green-800">
          {internship.enterprise.name}
        </h1>
        <div>
          <img
            alt="enterprise"
            src="/enterprise mock.svg"
            className="max-h-40 rounded-lg object-cover mb-2"
          />
        </div>
      </div>
    </div>
  );
}
