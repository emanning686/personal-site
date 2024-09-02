import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Magnet from "./magnet";
import Link from "next/link";

function getH1(string: string) {
  string = string
    .toLowerCase()
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return <h1 className="">{string}</h1>;
}

function getBackground(string: string) {
  return (
    <Image
      className="absolute top-0 z-0 h-full w-full object-cover"
      src={`/${string}.png`}
      width={1000}
      height={1000}
      alt={string}
    />
  );
}

function getIcons(string: string) {
  return (
    <div className="z-10 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#4b4d6c] bg-opacity-25 p-2">
      {string.split(" ").map((s) => (
        <div key={s}>
          <Magnet src={`${s}.svg`} resize={false} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectLink({
  name,
  icons,
  blurb,
  href,
}: {
  name: string;
  icons: string;
  blurb: string;
  href: string;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      controls.start("hover");
    }
  }, []);

  return (
    <Link href={href}>
      <motion.div
        className="relative flex h-[400px] w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-xl bg-purple-400 p-4 lg:h-full"
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
      >
        <div className="z-10 rounded-xl bg-[#4b4d6c] bg-opacity-40 p-2 text-center text-xl font-bold text-[#ffffff]">
          {getH1(name)}
        </div>
        {getBackground(name)}
        <div className="absolute top-0 z-0 h-full w-full bg-[#4b4d6c] bg-opacity-40 object-cover shadow-inner" />
        <motion.div
          className="absolute top-0 z-0 h-full w-full bg-[#4b4d6c] bg-opacity-50 object-cover shadow-inner blur-xl"
          variants={{
            initial: { scale: 0 },
            hover: { scale: 1.25 },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
        <motion.div
          className="z-10 flex items-start justify-center gap-2 overflow-hidden rounded-xl bg-[#4b4d6c] bg-opacity-25 text-lg font-light text-[#ffffff]"
          variants={{
            initial: { height: 42 },
            hover: { height: "auto" },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <p className="m-2">{blurb}</p>
        </motion.div>
        {getIcons(icons)}
      </motion.div>
    </Link>
  );
}
