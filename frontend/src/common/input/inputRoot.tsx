import { ReactNode } from "react";

type InputRootProps = {
  children: ReactNode;
};

export function InputRoot({ children }: InputRootProps) {
  return <div className="input-icon-container">{children}</div>;
}
