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
import { useEffect, useRef } from "react";
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
  const controls = useAnimationControls();

  useEffect(() => {
    if (start) {
      controls.start("initial");
    } else {
      controls.start("animate");
    }
  }, [start]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-1/2 top-32 z-10 flex translate-x-1/2 flex-col items-center gap-4 lg:right-12 lg:translate-x-0 lg:flex-row-reverse xl:right-36">
        <Image
          src="/pfp.jpg"
          alt="Profile picture"
          width={500}
          height={500}
          className="scale-75 rounded-3xl shadow-2xl shadow-[#2b2d46] md:scale-100"
        />
        <div className="h-[425px] w-[350px] rounded-xl bg-[#2b2d46] bg-opacity-50 p-2 text-2xl md:p-4 lg:h-[700px] lg:w-[400px] lg:text-4xl">
          <h1 className="font-semibold text-[#d0cae9]">
            What I'm doing this semester:
          </h1>
          <h1 className="font-light text-[#fed8b4]">Gen Chem for Engineers</h1>
          <h1 className="font-light text-[#f79c95]">Gen & Analy Chem Lab I</h1>
          <h1 className="font-light text-[#fed8b4]">Principles of Marketing</h1>
          <h1 className="font-light text-[#f79c95]">
            Undergraduate Co-op Seminar
          </h1>
          <h1 className="font-light text-[#fed8b4]">
            Intro to Software Engineering
          </h1>
          <h1 className="font-light text-[#f79c95]">Web Engineering</h1>
          <h1 className="font-light text-[#fed8b4]">
            Introduction to Visual Culture
          </h1>
        </div>
      </div>
      <div className="absolute top-[-50px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[-250px] md:p-72">
        <div className="-rotate-6">
          <ParallaxText baseVelocity={-2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
      <div className="absolute top-[300px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:p-96 lg:top-[500px]">
        <div className="rotate-12">
          <ParallaxText baseVelocity={2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
    </div>
  );
}
