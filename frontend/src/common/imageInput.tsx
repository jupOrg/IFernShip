export function ImageInput() {
  return (
    <label className="default-input bg-white cursor-pointer">
      <div className="text-gray-500">Adicionar imagem</div>
      <div className="justify-center items-center">
        <img src="/image-placeholder.svg" alt="" />
      </div>
      <input type="file" accept="image/*" className="w-0 h-0 hidden" />
    </label>
  );
}
