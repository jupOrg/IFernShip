type Props = {
  isActive: boolean;
};

export function IsActiveLabel({ isActive }: Props) {
  const text = isActive ? "Ativo" : "Inativo";
  return (
    <div
      className={
        "border rounded-full px-2  " +
        (isActive ? "border-green-500" : "border-gray-500")
      }
    >
      {text}
    </div>
  );
}
