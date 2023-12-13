type Props = {
  text: string;
};

export function SeparateParagraphs({ text }: Props) {
  return (
    <div className="gap-2">
      {text.split("\n").map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}
