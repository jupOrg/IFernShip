import { FaSearch } from "react-icons/fa";

export function SearchInput() {
  return (
    <div className="relative items-center flex-row">
      <FaSearch
        size={20}
        className="absolute left-3 opacity-50 pointer-events-none"
      />
      <input
        type="text"
        name=""
        id=""
        className="default-input rounded-full pl-9"
      />
    </div>
  );
}
