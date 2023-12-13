import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="fixed hidden sm:flex top-5 left-5">
      <img
        alt="logo"
        src="./ifpb-logo-black.svg"
        className="w-14 aspect-square"
      />
    </Link>
  );
}
