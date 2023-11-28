type Props = {
  text: string;
  urlImage: string;
  position?: "self-end" | "self-start";
};

export function CardChoicePerson({ text, urlImage, position }: Props) {
  const classCard =
    "shadow-cards bg-white justify-between max-h-64 rounded-3xl py-2 px-6 gap-2";
  return (
    <a href="/cadastro" className={position}>
      <div className={classCard}>
        <img src={urlImage} className="w-40 aspect-square" />
        <p className="text-black text-lg w-40 text-center">{text}</p>
      </div>
    </a>
  );
}
