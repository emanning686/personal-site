"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import Nav from "../_components/nav";
import Burger from "../_components/burger";
import Hero from "../_components/hero";
import Technologies from "../_components/technologies";
import ProjectsGrid from "../_components/projectsgrid";
import Footer from "../_components/footer";

export default function Home() {
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0);
  }, [lenis]);

  function scrollToBottom() {
    lenis?.scrollTo(500000);
  }

  const [heroHidden, setHeroHidden] = useState(false);

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
    <ReactLenis root>
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
        <Burger halfway={halfway} scrollToBottom={scrollToBottom} />
        <div className="grid h-screen grid-rows-[auto_1fr]">
          <Nav start={start} scrollToBottom={scrollToBottom} />
          <div className={heroHidden ? "hidden" : ""}>
            <Hero start={start} />
          </div>
        </div>
        <Technologies setHeroHidden={setHeroHidden} />
        <ProjectsGrid />
        <Footer />
      </main>
    </ReactLenis>
  );
}
