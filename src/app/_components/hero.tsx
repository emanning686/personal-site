import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  motion,
  useAnimationControls,
  delay,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

function ParallaxText({
  children,
  baseVelocity = 100,
  controls,
}: {
  children: string;
  baseVelocity: number;
  controls: any;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="line-h m-0 flex w-full flex-nowrap whitespace-nowrap tracking-widest">
      <motion.div
        className="line-h flex-nowrap whitespace-nowrap text-5xl font-black text-[#fed8b4] md:text-7xl"
        style={{ x }}
      >
        <motion.span
          className="ml-12 rounded-2xl p-4 opacity-60"
          variants={{
            initial: { backgroundColor: "#2b2d46", color: "#fed8b4" },
            animate: { backgroundColor: "#ffffff", color: "#fed8b4" },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="ml-12 rounded-2xl p-4 opacity-60"
          variants={{
            initial: { backgroundColor: "#2b2d46", color: "#fed8b4" },
            animate: { backgroundColor: "#ffffff", color: "#fed8b4" },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="ml-12 rounded-2xl p-4 opacity-60"
          variants={{
            initial: { backgroundColor: "#2b2d46", color: "#fed8b4" },
            animate: { backgroundColor: "#ffffff", color: "#fed8b4" },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
        <motion.span
          className="ml-12 rounded-2xl p-4 opacity-60"
          variants={{
            initial: { backgroundColor: "#2b2d46", color: "#fed8b4" },
            animate: { backgroundColor: "#ffffff", color: "#fed8b4" },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      </motion.div>
    </div>
  );
}

export default function Hero({ start }: { start: boolean }) {
  const [hovered, setHovered] = useState(false);

  const controls = useAnimationControls();
  const controls2 = useAnimationControls();

  useEffect(() => {
    if (start) {
      controls.start("initial");
      hovered
        ? controls2.start("startAnimate")
        : controls2.start("startInitial");
    } else {
      controls.start("animate");
      hovered ? controls2.start("animate") : controls2.start("initial");
    }
  }, [start, hovered]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-1/2 top-32 z-10 flex translate-x-1/2 flex-col items-center gap-28 md:gap-80 lg:right-12 lg:translate-x-0 lg:flex-row-reverse lg:gap-4 xl:right-36">
        <Image
          src="/pfp.jpg"
          alt="Profile picture"
          width={500}
          height={500}
          className="scale-75 rounded-3xl shadow-2xl shadow-[#211f21] md:scale-100"
        />
        <motion.div
          className="w-[350px] rounded-xl p-2 opacity-75 [--h-init:75px] [--h:300px] lg:w-[400px] lg:p-4 lg:[--h-init:115px] lg:[--h:500px]"
          variants={{
            initial: {
              height: "var(--h-init)",
              backgroundColor: "#d0cae9",
              transition: { delay: 0.2 },
            },
            animate: { height: "var(--h)", backgroundColor: "#d0cae9" },
            startInitial: {
              height: "var(--h-init)",
              backgroundColor: "#211f21",
              transition: { delay: 0.2 },
            },
            startAnimate: { height: "var(--h)", backgroundColor: "#211f21" },
          }}
          initial={start ? "startInitial" : "initial"}
          animate={controls2}
          onHoverStart={() => {
            setHovered(true);
          }}
          onHoverEnd={() => {
            setHovered(false);
          }}
        >
          <motion.h1
            className="text-2xl font-semibold lg:text-4xl"
            variants={{
              initial: { color: "#d0cae9" },
              animate: { color: "#4b4d6c" },
            }}
            initial="initial"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            What am I doing this semester?
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#5787a9" },
              animate: { opacity: 1, x: 0, color: "#5787a9" },
              startInitial: { opacity: 0, x: -20, color: "#fed8b4" },
              startAnimate: { opacity: 1, x: 0, color: "#fed8b4" },
            }}
            initial="initial"
            animate={controls2}
          >
            Gen Chem for Engineers
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#4b4d6c" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#4b4d6c",
                transition: { delay: 0.1 },
              },
              startInitial: { opacity: 0, x: -20, color: "#f79c95" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#f79c95",
                transition: { delay: 0.1 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Gen & Analy Chem Lab I
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#5787a9" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#5787a9",
                transition: { delay: 0.2 },
              },
              startInitial: { opacity: 0, x: -20, color: "#fed8b4" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#fed8b4",
                transition: { delay: 0.2 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Principles of Marketing
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#4b4d6c" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#4b4d6c",
                transition: { delay: 0.3 },
              },
              startInitial: { opacity: 0, x: -20, color: "#f79c95" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#f79c95",
                transition: { delay: 0.3 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Undergraduate Co-op Seminar
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#5787a9" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#5787a9",
                transition: { delay: 0.4 },
              },
              startInitial: { opacity: 0, x: -20, color: "#fed8b4" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#fed8b4",
                transition: { delay: 0.4 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Intro to Software Engineering
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#4b4d6c" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#4b4d6c",
                transition: { delay: 0.5 },
              },
              startInitial: { opacity: 0, x: -20, color: "#f79c95" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#f79c95",
                transition: { delay: 0.5 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Web Engineering
          </motion.h1>
          <motion.h1
            className="text-xl font-light lg:text-3xl"
            variants={{
              initial: { opacity: 0, x: -20, color: "#5787a9" },
              animate: {
                opacity: 1,
                x: 0,
                color: "#5787a9",
                transition: { delay: 0.6 },
              },
              startInitial: { opacity: 0, x: -20, color: "#fed8b4" },
              startAnimate: {
                opacity: 1,
                x: 0,
                color: "#fed8b4",
                transition: { delay: 0.6 },
              },
            }}
            initial="initial"
            animate={controls2}
          >
            Introduction to Visual Culture
          </motion.h1>
        </motion.div>
      </div>
      <div className="absolute top-[-50px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[-250px] md:p-72">
        <div className="-rotate-6">
          <ParallaxText baseVelocity={-2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
      <div className="absolute top-[300px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[400px] md:p-52 lg:top-[500px] lg:p-96">
        <div className="rotate-12">
          <ParallaxText baseVelocity={2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
    </div>
  );
}
