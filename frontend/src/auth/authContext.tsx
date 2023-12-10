import { createContext, useContext, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

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
  handleModal?: (props: ModalProps) => void;
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [modalData, setModalData] = useState<ModalProps>({
    title: "Ocorreu um error",
    message: "",
    isVisible: false,
    callbackClose: closeModalError,
  });

  const token = Cookies.get("token");
  const api = createApiInstance(token);

  function handleModal(props: ModalProps) {
    setModalData({ ...modalData, ...props });
  }

  function closeModalError() {
    setModalData({ ...modalData, isVisible: false });
  }

  async function login(
    email: string,
    password: string
  ): Promise<responseLogin> {
    // This is not a GET because of the body encryption
    const res = await api.post("/auth/login", { email, password });
    const { user, token } = res.data;
    Cookies.set("token", token);
    setUser(user);
    return res.data;
  }

  async function getUser() {
    try {
      const res = await api.get<User | undefined>("/users/me");
      setUser(res.data);
    } catch (err) {
      const error = err as AxiosError;
      const { status } = error.response as AxiosResponse;
      if (status === 401) {
        console.error(error);
      }
    }
  }

  async function logout() {
    // await api.post("/logout");
    Cookies.set("token", "");
    setUser(undefined);
  }

  const isLogged = !!token;

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
        handleModal,
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
