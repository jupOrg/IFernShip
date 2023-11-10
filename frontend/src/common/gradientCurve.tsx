type Props = {
  offset?: "small" | "large";
};

export function GradientCurve({ offset = "small" }: Props) {
  return (
    <img
      alt=""
      src="/gradient-curve.svg"
      className={`fixed ${
        offset === "small" ? "left-0" : "-left-44"
      } top-0 bottom-0 h-full -z-10 object-cover hidden md:flex`}
    />
  );
}
