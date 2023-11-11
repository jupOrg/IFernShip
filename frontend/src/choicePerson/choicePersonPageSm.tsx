import { CardChoicePerson } from "./choicePersonCard";
import { Logo } from "../common/logo";

export function ChoicePersonSM() {
  return (
    <div className="min-h-screen items-center gradient-page gap-28">
      <Logo />
      
      <span className="text-white text-center">
        <h1 className="font-bold text-6xl">Quem é Você?</h1>
        <p className="font-light mt-4 text-4xl w-96">
          Selecione o botão correspondente ao seu título na instituição:
        </p>
      </span>

      <div className="flex-row gap-14">
        <CardChoicePerson
          text="Coordenador"
          urlImage="/image-chose-coordinator.svg"
        />
        <CardChoicePerson
          text="Estudante"
          urlImage="/image-chose-student.svg"
        />
      </div>
    </div>
  );
}
