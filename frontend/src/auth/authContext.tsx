import { createContext, useContext, useEffect, useState } from "react";

import { createApiInstance } from "../api/api";
import { ChildrenProps } from "../common/childrenProps";
import { User } from "../types/user";
import { Modal, ModalProps } from "../common/Modal";
import { responseLogin } from "../types/responseLogin";

type AuthContext = {
  user?: User;
  token?: string;
  isLogged: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<responseLogin>;
  handleModalError?: (props: ModalProps) => void;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>("");
  const [modalData, setModalData] = useState<ModalProps>({
    message: "",
    isVisible: false,
    callbackClose: closeModalError,
  });

  const api = createApiInstance(token);

  function handleModalError(props: ModalProps) {
    setModalData({ ...modalData, ...props });
  }

  function closeModalError() {
    setModalData({ ...modalData, isVisible: false })
  }

  async function login(
    email: string,
    password: string
  ): Promise<responseLogin> {
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
    } catch (error) {
      if (error.response.status === 401) {
        console.error(error)
      }
    }
  }

  async function logout() {
    await api.post("/logout");
    setUser(undefined);
    setToken("");
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
        handleModalError,
      }}
    >
      {children}
      <Modal {...modalData} />
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
