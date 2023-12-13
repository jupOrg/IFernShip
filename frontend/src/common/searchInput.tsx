import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { api } from "../api/api";

const endpointForPath = {
  "/estagios": "/internships",
  "/empresas": "/enterprises",
};

export function SearchInput({ setData }) {
  const { register, getValues } = useForm();
  const location = useLocation();

  async function submit(event: SubmitEvent) {
    event.preventDefault();
    const search = getValues("search");
    const endpoint = endpointForPath[location.pathname];
    const endpointCustom = search === "" ? endpoint : `${endpoint}?q=${search}`;
    const res = await api.get(endpointCustom);
    setData(res.data);
  }

  return (
    <form className="input-icon-container" onSubmit={submit}>
      <FaSearch size={20} className="input-icon" />
      <input
        type="text"
        placeholder="Pesquisar"
        className="default-input rounded-full pl-9 w-full"
        {...register("search")}
      />
      <button className="invisible h-0 w-0"></button>
    </form>
  );
}
