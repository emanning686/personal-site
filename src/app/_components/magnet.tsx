import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Magnet({
  src,
  resize,
}: {
  src: string;
  resize: boolean;
}) {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    if (!magnetic.current) return;
    magnetic.current.addEventListener("mousemove", (e) => {
      if (!magnetic.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(
    <Image
      className={
        resize ? "-m-7 scale-50 md:-m-0 md:scale-100" : "-m-0 scale-100"
      }
      src={src}
      alt="icon"
      width={100}
      height={100}
    />,
    { ref: magnetic },
  );
}
