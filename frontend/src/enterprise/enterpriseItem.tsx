import { Link } from "react-router-dom";
import { Enterprise } from "../types/enterprise";

type Props = {
  enterprise: Enterprise;
};

export function EnterprisesItem({ enterprise }: Props) {
  return (
    <Link to={`/empresas/${enterprise.id}`}>
      <div className="bg-white rounded-xl p-2 hover:shadow-xl transition duration-75">
        <img
          alt="enterprise"
          src={enterprise.picture}
          className="max-h-36 w-full h-40 rounded-lg object-cover mb-2 bg-black/10"
        />
        <div className="font-semibold text-lg">{enterprise.name}</div>
      </div>
    </Link>
  );
}
