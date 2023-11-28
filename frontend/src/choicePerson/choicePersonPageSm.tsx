import { CardChoicePerson } from "./choicePersonCard";

export function ChoicePersonSM() {
  return (
    <div className="min-h-screen items-center gradient-page justify-around">
      <div className="text-white text-center gap-2">
        <h1 className="font-medium text-4xl">Quem é Você?</h1>
        <div className="text-2xl">
          Selecione o botão correspondente ao seu título na instituição:
        </div>
      </div>
      <div className="gap-2">
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
