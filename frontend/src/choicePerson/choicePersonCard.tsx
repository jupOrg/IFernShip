type Props = {
  text: string;
  urlImage: string;
  position?: "self-end" | "self-start";
};

export function CardChoicePerson({ text, urlImage, position }: Props) {
  const classCard = "shadow-cards bg-[#F2F5F9] md:bg-[#63c7513f] justify-between max-h-64 rounded-3xl py-8 px-10 gap-6"
  return (
    <a href="/entrar" className={position}>
      <div className={classCard}>
        <img src={urlImage} className="w-40" />
        <p className="text-black text-2xl w-40 text-center">{text}</p>
      </div>
    </a>
  );
}
