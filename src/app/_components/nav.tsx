import { useState, useEffect } from "react";
import NavLink from "./navlink";
import { motion, useAnimationControls } from "framer-motion";

export default function Nav({ start }: { start: boolean }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (start) {
      controls.start("initial");
    } else {
      controls.start("animate");
    }
  }, [start]);

  return (
    <motion.div
      className="z-20 flex h-20 w-full items-center justify-between px-4 text-xs font-light opacity-0 md:text-3xl md:opacity-100"
      variants={{
        initial: { backgroundColor: "#211f21", color: "#d7d6ce" },
        animate: { backgroundColor: "#ffffff", color: "#2b2d46" },
      }}
      initial="initial"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div>Eric Manning</div>
      <div className="flex gap-2">
        <NavLink href="/" text="Projects" />
        <NavLink href="/" text="Resume" />
        <NavLink href="/" text="Contact" />
      </div>
    </motion.div>
  );
}
