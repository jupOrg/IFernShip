import { Logo } from "../common/logo";
import { CardChoicePerson } from "./choicePersonCard";

export function ChoicePersonMD() {
  return (
    <div className="flex-row flex-1 bg-curve-right">
      <Logo />
      <div className="flex-1 justify-center">
        <div className="flex-row gap-14 justify-center items-center">
          <div className="pb-32">
            <CardChoicePerson
              text="Coordenador"
              urlImage="/image-chose-coordinator.svg"
            />
          </div>
          <div className="pt-32">
            <CardChoicePerson
              text="Estudante"
              urlImage="/image-chose-student.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <span className="text-white lg:ml-10 mr-auto mt-16 max-w-fit">
          <h1 className="font-bold text-4xl">Quem é Você?</h1>
          <p className="font-light mt-16 ml-20 text-2xl text-center w-80">
            Selecione o botão correspondente ao seu título na instituição
          </p>
        </span>
      </div>
    </div>
  );
}
