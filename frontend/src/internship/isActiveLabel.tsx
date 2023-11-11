type Props = {
  isActive: boolean;
};

export function IsActiveLabel({ isActive }: Props) {
  const text = isActive ? "Ativo" : "Inativo";
  return (
    <div
      className={
        "border-2 rounded-full px-2 self-start " +
        (isActive ? "border-green-500" : "border-gray-500")
      }
    >
      {text}
    </div>
  );
}
