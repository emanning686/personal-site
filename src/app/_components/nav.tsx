import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import NavLink from "./navlink";

export default function Nav({
  start,
  scrollToBottom,
}: {
  start: boolean;
  scrollToBottom: any;
}) {
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
        <Link href="/">
          <NavLink text="About" color="#f79c95" />
        </Link>
        <Link href="https://docs.google.com/document/d/1twyQ_vg1DGgMPYcafVZCkUGH8WGAJqKA/edit?usp=sharing&ouid=118051935442664174489&rtpof=true&sd=true">
          <NavLink text="Resume" color="#d6d753" />
        </Link>
        <button onClick={scrollToBottom}>
          <NavLink text="Contact" color="#5787a9" />
        </button>
      </div>
    </motion.div>
  );
}
