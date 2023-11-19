import { api } from "../api/api";
import { User } from "../types/user";

export async function registerUser({ name, role, email, password }: User) {
    const res = await api.post("/register", { name, role, email, password });
    return res
}