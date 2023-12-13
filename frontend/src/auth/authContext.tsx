import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { ChildrenProps } from "../common/childrenProps";
import { responseLogin } from "../types/responseLogin";
import { User } from "../types/user";

type AuthContext = {
  user?: User;
  isLogged: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<responseLogin>;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  async function login(
    email: string,
    password: string,
  ): Promise<responseLogin> {
    // This is not a GET because of the body encryption
    const res = await api.post("/auth/login", { email, password });
    const { user, token } = res.data;
    setUser(user);
    Cookies.set("token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return res.data;
  }

  async function getUser() {
    try {
      const res = await api.get<User | undefined>("/users/me");
      setUser(res.data);
    } catch {
      setUser(undefined);
    }
    setIsLoading(false);
  }

  function setTokenFromCookies() {
    const token = Cookies.get("token");
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  async function logout() {
    Cookies.set("token", "");
    setUser(undefined);
  }

  const isLogged = !!user;

  useEffect(() => {
    setTokenFromCookies();
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
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
