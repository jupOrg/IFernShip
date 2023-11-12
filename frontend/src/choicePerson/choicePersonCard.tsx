type Props = {
  text: string;
  urlImage: string;
  className?: string;
};

export function CardChoicePerson({ text, urlImage, className }: Props) {
  const classCard = "shadow-cards bg-[#F2F5F9] md:bg-[#63c7513f] justify-between max-h-64 rounded-3xl py-8 px-10 gap-6"
  return (
    <div className={classCard + " " + className}>
      <img src={urlImage} className="w-40" />
      <p className="text-black text-2xl w-40 text-center">{text}</p>
    </div>
  );
}
