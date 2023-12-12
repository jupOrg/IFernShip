import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

export function TabItem({ to, children }: Props) {
  const location = useLocation();
  const isSelected = location.pathname.startsWith(to);

  return (
    <Link
      className={
        "button sm:hover:bg-black/10 rounded p-2 gap-1 sm:justify-start " +
        (isSelected
          ? "sm:border-l-4 border-black rounded-b-none"
          : "opacity-50")
      }
      to={to}
    >
      {children}
    </Link>
  );
}
