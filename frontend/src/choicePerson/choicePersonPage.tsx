import { Logo } from "../common/logo";
import { CardChoicePerson } from "./choicePersonCard";

export function ChoicePerson() {
  return (
    <div className="flex-col-reverse md:flex-row flex-1 bg-curve-right px-5">
      <Logo />
      <div className="flex-1 justify-center">
        <div className="flex-row gap-14 justify-center">
          <div className="md:pb-32">
            <CardChoicePerson
              text="Coordenador"
              urlImage="/image-chose-coordinator.svg"
            />
          </div>
          <div className="md:pt-32">
            <CardChoicePerson
              text="Estudante"
              urlImage="/image-chose-student.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 justify-center items-center md:justify-normal">
        <div className="text-center gap-2 max-w-fit md:gap-14 md:mr-auto md:mt-16 md:text-white lg:ml-10">
          <h1 className="text-4xl font-bold md:text-left">Quem é Você?</h1>
          <p className="font-light text-2xl w-80 md:ml-20">
            Selecione o botão correspondente ao seu título na instituição
          </p>
        </div>
      </div>
    </div>
  );
}
