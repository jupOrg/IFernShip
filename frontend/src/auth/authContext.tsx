import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { ChildrenProps } from "../common/childrenProps";
import { User } from "../types/user";

type AuthContext = {
  user?: User;
  isLogged: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  async function login(email: string, password: string) {
    // This is not a GET because of the body encryption
    const res = await api.post("/login", { email, password });
    setUser(res.data);
  }

  async function getUser() {
    const res = await api.get<User | undefined>("/me");
    setUser(res.data);
    setIsLoading(false);
  }

  const isLogged = !!user;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        login,
        isLogged,
        isLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
