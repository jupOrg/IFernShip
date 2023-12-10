type Props = {
  setFile: (file: File) => void;
  file: File | null;
};

export function ImageInput({ file, setFile }: Props) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const listFiles = event.target.files as FileList;
    const fileSelect = listFiles[0];
    setFile(fileSelect);
  };
  return (
    <label className="default-input bg-white cursor-pointer">
      <div className="text-gray-500">Adicionar imagem</div>
      <div className="justify-center items-center">
        {file ? (
          <p>{file.name}</p>
        ) : (
          <img src="/image-placeholder.svg" alt="" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        className="w-0 h-0 hidden"
        onChange={handleFileChange}
      />
    </label>
  );
}
