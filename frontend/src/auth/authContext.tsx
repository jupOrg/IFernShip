import { createContext, useContext, useEffect, useState } from "react";

import { createApiInstance } from "../api/api";
import { ChildrenProps } from "../common/childrenProps";
import { User } from "../types/user";

type AuthContext = {
  user?: User;
  token?: string;
  isLogged: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const api = createApiInstance(token);

  async function login(email: string, password: string) {
    // This is not a GET because of the body encryption
    const res = await api.post("/login", { email, password });
    const { user, token } = res.data;
    
    setToken(token);
    setUser(user);

    return res.data;
  }

  async function getUser() {
    try {
      const res = await api.get<User | undefined>("/users/me");
      setUser(res.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        setIsLoading(false);
      }
    }
  }

  async function logout() {
    await api.post("/logout");
    setUser(undefined);
    setToken("")
  }

  const isLogged = !!user;

  useEffect(() => {
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        token,
        login,
        logout,
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
