import { FaSearch } from "react-icons/fa";

export function SearchInput() {
  return (
    <div className="input-icon-container">
      <FaSearch size={20} className="input-icon" />
      <input
        type="text"
        placeholder="Pesquisar"
        className="default-input rounded-full pl-9"
      />
    </div>
  );
}
