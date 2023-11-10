import { createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { ChildrenProps } from "../common/childrenProps";
import { User } from "../types/user";

type AuthContext = {
  user: User;
  login: (email: string, password: string) => void;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>({
    picture: "torvalds",
    role: "coordinator",
    name: "Linus Torvalds",
  });

  async function login(email: string, password: string) {
    // This is not a GET because of the body encryption
    const res = await api.post("/login", { email, password });
    setUser(res.data);
  }

  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
