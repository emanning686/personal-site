"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Nav from "../_components/nav";
import Hero from "../_components/hero";

export default function Home() {
  const [start, setStart] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [bg, setBg] = useState("/bg1.png");

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.get());
    if (scrollYProgress.get() > 0) {
      setStart(false);
    } else {
      setStart(true);
    }
  });

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  useEffect(() => {
    if (start) {
      controls1.start("initial");
      controls2.start("initial");
    } else {
      controls1.start("animate");
      controls2.start("animate");
    }
  }, [start]);

  return (
    <main ref={ref}>
      <motion.div
        className="fixed left-0 top-0 z-30 h-[110vh] w-full bg-[#2b2d46] text-6xl font-bold text-[#d0cae9] md:text-8xl"
        variants={{
          initial: {
            y: 0,
            borderBottomLeftRadius: "50% 10%",
            borderBottomRightRadius: "50% 10%",
          },
          animate: {
            y: "-100%",
            borderBottomLeftRadius: "50% 0%",
            borderBottomRightRadius: "50% 0%",
          },
        }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.75, delay: 0.1, ease: "easeInOut" }}
      >
        <div className="flex h-screen items-center justify-center">
          <h1>Home</h1>
        </div>
      </motion.div>
      <motion.div
        className={"fixed inset-0 -z-20 w-full bg-[url('/bg1.png')] bg-center"}
        variants={{ initial: { opacity: 1 }, animate: { opacity: 0 } }}
        initial="initial"
        animate={controls2}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={"fixed inset-0 -z-20 w-full bg-[url('/bg2.png')] bg-center"}
        variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
        initial="initial"
        animate={controls1}
        transition={{ duration: 0.5 }}
      />
      <div className="grid h-screen grid-rows-[auto_1fr]">
        <Nav start={start} />
        <Hero start={start} />
      </div>
      <div className="h-screen" />
    </main>
  );
}
