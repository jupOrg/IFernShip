import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { Modal, ModalProps } from "../common/Modal";
import { ChildrenProps } from "../common/childrenProps";
import { responseLogin } from "../types/responseLogin";
import { User } from "../types/user";

type AuthContext = {
  user?: User;
  isLogged: boolean;
  isCoordinator: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<responseLogin>;
  handleModal?: (props: ModalProps) => void;
  closeModal?: () => void;
  refreshPage?: () => void
};

const authContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<User>();
  const [modalData, setModalData] = useState<ModalProps>({
    title: "Ocorreu um error",
    message: "",
    isVisible: false,
    callbackClose: closeModal,
  });

  function handleModal(props: ModalProps) {
    setModalData({ ...modalData, ...props });
  }

  function closeModal() {
    setModalData({ ...modalData, isVisible: false });
  }

  async function login(
    email: string,
    password: string
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
    } catch (err) {
      const error = err as AxiosError;
      const { status } = error.response as AxiosResponse;
      if (status === 401) {
        console.error(error);
      }
    }
  }

  function setTokenFromCookies() {
    const token = Cookies.get("token");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  async function logout() {
    Cookies.set("token", "");
    setUser(undefined);
  }

  function refreshPage() {
    window.location.reload()
  }

  const isLogged = !!user;
  const isCoordinator = user?.role === "coordinator";

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
        closeModal,
        handleModal,
        refreshPage,
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
