"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Domine } from "next/font/google";

const domine = Domine({ subsets: ["latin"] });

async function createLocomotiveScroll() {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new LocomotiveScroll();
}

function Word({
  word,
  range,
  y,
}: {
  word: string;
  range: number[];
  y: MotionValue<number>;
}) {
  const opacity = useTransform(y, range, [0, 1]);
  return (
    <span className="relative mr-2 mt-2 md:mr-3 md:mt-3">
      <motion.span style={{ opacity }}>{word}</motion.span>
      <span className="absolute left-0 top-0 opacity-10">{word}</span>
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    createLocomotiveScroll();
  }, []);

  const text =
    "Hello, I'm Eric. I am a Software Engineering student at the Rochester Institute of Technology, and a self taught developer with 4 years of experience. I enjoy problem solving through code and learning new languages to better do so.";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"],
  });

  const words = text.split(" ");

  return (
    <div className={`flex w-full flex-col items-center ${domine.className}`}>
      <div className="h-[55vh]" />
      <p ref={ref} className="flex w-3/4 flex-wrap text-3xl md:text-5xl">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              y={scrollYProgress}
            />
          );
        })}
      </p>
      <div className="h-screen" />
    </div>
  );
}
