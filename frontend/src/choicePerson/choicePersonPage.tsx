import { Logo } from "../common/logo";
import { CardChoicePerson } from "./choicePersonCard";

export function ChoicePersonMD() {
  return (
    <div className="flex-row min-h-screen bg-curve-right">
      <div className="w-1/2 pl-24 min-h-full py-16 justify-between">
        <Logo />
        <div className="flex-row gap-14 h-96 2xl:mb-44 2xl:ml-44">
          <CardChoicePerson
            text="Coordenador"
            urlImage="/image-chose-coordinator.svg"
          />
          <CardChoicePerson
            text="Estudante"
            urlImage="/image-chose-student.svg"
            position="self-end"
          />
        </div>
      </div>
      <div className="w-1/2">
        <span className="text-white lg:ml-10 mr-auto mt-16 max-w-fit 2xl:mt-44 2xl:ml-28">
          {/* margin-left anterior: ml-0 md:ml-28 lg:ml-56 */}
          <h1 className="font-bold text-4xl 2xl:text-5xl 2xl:ml-52">Quem é Você?</h1>
          <p className="font-light mt-16 ml-20 text-2xl text-center w-80 2xl:text-3xl 2xl:ml-52">
            Selecione o botão correspondente ao seu título na instituição:
          </p>
        </span>
      </div>
    </div>
  );
}
