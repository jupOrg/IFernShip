import { Link } from "react-router-dom";

type Props = {
  hiddenBreakpoint?: string
}

export function Logo({ hiddenBreakpoint = "sm" }: Props) {
  return (
    <Link to="/" className={`fixed hidden ${hiddenBreakpoint}:flex top-5 left-5`}>
      <img
        alt="logo"
        src="./ifpb-logo-black.svg"
        className="w-14 aspect-square"
      />
    </Link>
  );
}
