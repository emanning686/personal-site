"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Lenis from "lenis";
import Nav from "../_components/nav";
import Burger from "../_components/burger";
import Hero from "../_components/hero";
import Technologies from "../_components/technologies";
import Projects from "../_components/projects";

export default function Home() {
  const [heroHidden, setHeroHidden] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [start, setStart] = useState(true);
  const [halfway, setHalfway] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (scrollYProgress.get() > 0) {
      setStart(false);
    } else {
      setStart(true);
    }
    if (scrollYProgress.get() > 0.15) {
      setHalfway(true);
    } else {
      setHalfway(false);
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
        className="fixed left-0 top-0 z-50 h-[110vh] w-full bg-[#2b2d46] text-6xl font-bold text-[#d0cae9] md:text-8xl"
        variants={{
          initial: {
            y: 0,
            borderBottomLeftRadius: "100% 10%",
            borderBottomRightRadius: "100% 10%",
          },
          animate: {
            y: "-100%",
            borderBottomLeftRadius: "100% 0%",
            borderBottomRightRadius: "100% 0%",
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
        className={"fixed inset-0 -z-20 bg-[url('/bg1.png')] bg-center"}
        variants={{ initial: { opacity: 1 }, animate: { opacity: 0 } }}
        initial="initial"
        animate={controls2}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className={"fixed inset-0 -z-20 bg-[url('/bg2.png')] bg-center"}
        variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
        initial="initial"
        animate={controls1}
        transition={{ duration: 0.5 }}
      />
      <Burger halfway={halfway} />
      <div className="grid h-screen grid-rows-[auto_1fr]">
        <Nav start={start} />
        <div className={heroHidden ? "hidden" : ""}>
          <Hero start={start} />
        </div>
      </div>
      <Technologies setHeroHidden={setHeroHidden} />
      <Projects />
    </main>
  );
}
