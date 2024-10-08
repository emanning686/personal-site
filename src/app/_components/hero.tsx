import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  motion,
  useAnimationControls,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

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
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHovered(true);
    }
  }, []);

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yBanners = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      ref={ref}
      className="relative -inset-y-32 h-full w-full md:-inset-y-0"
      style={{ y }}
    >
      <div className="absolute right-1/2 top-32 z-10 flex translate-x-1/2 flex-col items-center gap-12 md:gap-28 lg:right-12 lg:translate-x-0 lg:flex-row-reverse lg:gap-4 xl:right-36">
        <Image
          src="/pfp.jpg"
          alt="Profile picture"
          width={500}
          height={500}
          className="scale-75 rounded-3xl shadow-2xl shadow-[#211f21] md:scale-100"
        />
        <motion.div
          className="w-[350px] rounded-xl p-2 opacity-75 [--h-init:40px] [--h:250px] lg:w-[400px] lg:p-4 lg:[--h-init:115px] lg:[--h:500px]"
          variants={{
            initial: {
              height: "var(--h-init)",
              backgroundColor: "#ffffff",
              transition: { delay: 0.2 },
            },
            animate: { height: "var(--h)", backgroundColor: "#ffffff" },
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
            className="text-xl font-semibold lg:text-4xl"
            variants={{
              initial: { color: "#d0cae9" },
              animate: { color: "#f79c95" },
            }}
            initial="initial"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            What am I doing this semester?
          </motion.h1>
          <motion.h1
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
            className="text-lg font-light lg:text-3xl"
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
      <motion.div
        className="absolute top-[-50px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[-250px] md:p-72"
        style={{ y: yBanners }}
      >
        <div className="-rotate-6">
          <ParallaxText baseVelocity={-2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[300px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[400px] md:p-52 lg:top-[450px] lg:p-96"
        style={{ y: yBanners }}
      >
        <div className="rotate-12">
          <ParallaxText baseVelocity={2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </motion.div>
    </motion.div>
  );
}
