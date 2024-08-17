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
import Hero from "../_components/hero";
import Technologies from "../_components/technologies";
import Magnet from "../_components/magnet";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [start, setStart] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  useMotionValueEvent(scrollYProgress, "change", () => {
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
    <main
      ref={ref}
      className="flex h-screen w-full items-center justify-center"
    >
      <Magnet>
        <button className="rounded-lg border-0 bg-black p-12 font-bold text-white">
          Magnetic Button
        </button>
      </Magnet>
    </main>
  );
}
