import { FieldError } from "react-hook-form";

type Props = {
  error?: FieldError;
};

export function ErrorMessage({ error }: Props) {
  if (!error) {
    return null;
  }

  return <div className="error-message mb-1">{error.message}</div>;
}
