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
      <div className="w-full p-4">
        <Image
          src="/pfp.jpg"
          alt="Profile picture"
          width={500}
          height={500}
          className="absolute right-1/2 top-32 z-10 translate-x-1/2 scale-75 rounded-3xl shadow-2xl shadow-[#715d7e] md:right-36 md:translate-x-0 md:scale-100"
        />
      </div>
      <div className="absolute top-[-50px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[-200px] md:p-72">
        <div className="-rotate-6">
          <ParallaxText baseVelocity={-2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
      <div className="absolute top-[400px] z-10 h-[200px] w-[100vw] overflow-hidden rounded-2xl p-36 md:top-[200px] md:p-96">
        <div className="rotate-12">
          <ParallaxText baseVelocity={2} controls={controls}>
            Eric Manning • Software Engineering BS Student @ RIT
          </ParallaxText>
        </div>
      </div>
      <motion.div
        className="absolute right-1/2 top-12 h-[90vh] w-[90vw] translate-x-1/2 rounded-full opacity-15 blur-3xl md:right-12 md:translate-x-0"
        variants={{
          initial: { backgroundColor: "#4b4d6c" },
          animate: { backgroundColor: "#f79c95" },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute right-1/2 top-12 h-[800px] w-full translate-x-1/2 rounded-full opacity-10 blur-3xl md:right-12 md:w-[1200px] md:translate-x-0"
        variants={{
          initial: { backgroundColor: "#5787a9" },
          animate: { backgroundColor: "#e084a8" },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute right-1/2 top-96 h-[400px] w-full translate-x-1/2 rounded-full opacity-15 blur-3xl md:right-12 md:w-[700px] md:translate-x-0"
        variants={{
          initial: { backgroundColor: "#8e80ae" },
          animate: { backgroundColor: "#2a75ff" },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute right-1/2 top-48 h-[500px] w-[400px] translate-x-1/2 rounded-full opacity-20 blur-3xl md:right-96 md:translate-x-0"
        variants={{
          initial: { backgroundColor: "#715d7e" },
          animate: { backgroundColor: "#e96c2a" },
        }}
        initial="initial"
        animate={controls}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
