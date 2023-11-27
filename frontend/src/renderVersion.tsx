import { ReactNode, useEffect, useState } from "react";

export type RenderVersionProps = {
  PageMd: ReactNode;
  PageSm: ReactNode;
};

export function RenderVersion({ PageMd, PageSm }: RenderVersionProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return width > 768 ? PageMd : PageSm;
}
