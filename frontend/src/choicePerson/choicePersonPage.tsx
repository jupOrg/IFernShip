import { CardChoicePerson } from "./choicePersonCard";

export function ChoicePersonMd() {
  return (
    <div className="flex-row min-h-screen">
      {/* Trocar para ficar no BG depois */}
      <img
        src="/gradient_curve_rigth.svg"
        className="fixed right-0 top-0 bottom-0 h-full w-[55%] -z-10 object-cover"
      />

      <div className="w-1/2 pl-24 min-h-full py-16 justify-between">
        <img src="./ifpb-logo-dark.svg" alt="logo" width={93} height={113} />
        <div className="flex-row w-14 gap-14 h-96">
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
        <span className="text-white ml-48 mt-16">
          <h1 className="font-bold text-6xl">Quem é Você?</h1>
          <p className="font-light mt-16 text-4xl text-center w-80">
            Selecione o botão correspondente ao seu título na instituição:
          </p>
        </span>
      </div>
    </div>
  );
}
