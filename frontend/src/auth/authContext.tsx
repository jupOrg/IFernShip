import { createContext, useContext, useState } from "react";
import { ChildrenProps } from "../common/childrenProps";
import { User } from "../types/user";

type AuthContext = {
  user: User;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>({
    image: "torvalds",
    role: "coordinator",
    name: "Linus Torvalds",
  });

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
