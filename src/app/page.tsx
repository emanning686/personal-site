"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  MotionValue,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Domine } from "next/font/google";
import Lenis from "lenis";
import { HiMiniChevronDoubleDown } from "react-icons/hi2";

const domine = Domine({ subsets: ["latin"] });

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
  const router = useRouter();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const text =
    "Hello, I'm Eric. I am a Software Engineering student at the Rochester Institute of Technology, and a self taught developer with 4 years of experience. I enjoy problem solving through code and learning new languages to better do so.";

  const words = text.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "end 0.5"],
  });

  useMotionValueEvent(scrollYProgress, "change", async () => {
    if (scrollYProgress.get() === 1) {
      controls2.start("animate");
      await controls1.start("animate");
      router.push("/home");
    }
  });

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  return (
    <main>
      <div
        className={`relative w-full bg-[#2b2d46] text-[#d0cae9] ${domine.className}`}
      >
        <motion.div
          className="flex h-[55vh] items-center justify-center text-5xl opacity-10 md:text-7xl"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <HiMiniChevronDoubleDown />
        </motion.div>
        <div className="flex h-[120vh] flex-col items-center">
          <motion.p
            ref={ref}
            className="flex w-3/4 flex-wrap text-3xl md:text-5xl"
            variants={{
              initial: {
                y: 0,
              },
              animate: {
                y: "-300%",
              },
            }}
            initial="initial"
            animate={controls1}
            transition={{ duration: 2, type: "spring", delay: 0.5 }}
          >
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
          </motion.p>
        </div>
      </div>
      <motion.div
        className="fixed left-0 top-0 flex h-screen w-full items-center justify-center text-6xl font-bold text-[#d0cae9] md:text-8xl"
        variants={{
          initial: {
            y: "300%",
          },
          animate: {
            y: 0,
          },
        }}
        initial="initial"
        animate={controls2}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Home</h1>
      </motion.div>
    </main>
  );
}
