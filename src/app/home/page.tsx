"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Nav from "../_components/nav";

async function createLocomotiveScroll() {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new LocomotiveScroll();
}

export default function Home() {
  useEffect(() => {
    createLocomotiveScroll();
  }, []);

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
        <div className="h-full"></div>
      </div>
      <div className="h-screen" />
    </main>
  );
}
