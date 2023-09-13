import { api } from "../api/api";
import { Internship } from "../types/internship";

export async function internshipLoader({ params: { id } }) {
  console.log(id);
  const res = await api.get<Internship>("/internships/" + id);
  console.log(res.data);
  return res.data;
}
