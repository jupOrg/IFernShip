import { ElementType } from "react";

type InputIconProps = {
  icon: ElementType;
};

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon className="input-icon" />;
}
