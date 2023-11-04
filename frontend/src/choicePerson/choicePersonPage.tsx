import { CardChoicePerson } from "./choicePersonCard";
import { Logo } from "../common/logo";

export function ChoicePersonMD() {
  return (
    <div className="flex-row min-h-screen bg-curve-rigth">
      <div className="w-1/2 pl-24 min-h-full py-16 justify-between">
        <Logo />
        <div className="flex-row gap-14 h-96">
          <CardChoicePerson
            text="Coordenador"
            urlImage="/image-chose-coordinator.svg"
          />
          <CardChoicePerson
            text="Estudante"
            urlImage="/image-chose-student.svg"
            className="self-end"
          />
        </div>
      </div>
      <div className="w-1/2">
        <span className="text-white ml-60 mt-16">
          <h1 className="font-bold text-6xl">Quem é Você?</h1>
          <p className="font-light mt-16 text-4xl text-center w-80">
            Selecione o botão correspondente ao seu título na instituição:
          </p>
        </span>
      </div>
    </div>
  );
}
