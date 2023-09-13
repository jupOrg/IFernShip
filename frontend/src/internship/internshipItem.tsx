import { Internship } from "../types/internship";

type Props = {
  internship: Internship;
};

export function InternshipsItem({ internship }: Props) {
  return (
    <div className="bg-white rounded-xl p-2 max-w-lg">
      <img
        src="/enterprise mock.svg"
        alt="enterprise"
        className="max-h-32 rounded-lg object-cover mb-2"
      />
      <div className="flex-row justify-between">
        <div className="font-semibold text-xl">
          {internship.enterprise.name}
        </div>
        <div className="border border-green-500 rounded-full px-2">Ativo</div>
      </div>
      <div>{internship.position}</div>
    </div>
  );
}
