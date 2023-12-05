import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ ...rest }: InputTextProps) {
  return (
    <input
      type="text"
      className="default-input rounded-full flex-1 pl-8"
      {...rest}
    />
  );
}
