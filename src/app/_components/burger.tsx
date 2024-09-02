import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import SlideLink from "./slidelink";

export default function Burger({ halfway }: { halfway: boolean }) {
  const [open, setOpen] = useState(false);
  const visibleControls = useAnimationControls();
  const iconControls = useAnimationControls();
  const paneControls = useAnimationControls();

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    if (halfway) {
      visibleControls.start("opened");
    } else if (!open) {
      visibleControls.start("closed");
    }
  }, [halfway]);

  function handleHoverStart() {
    if (!open) {
      iconControls.start("hover");
    }
  }

  function handleHoverEnd() {
    if (!open) {
      iconControls.start("burger");
    }
  }

  async function handleClick() {
    if (!open) {
      iconControls.start("x");
      paneControls.start("opened");
    } else {
      mobile ? iconControls.start("burger") : iconControls.start("hover");
      paneControls.start("closed");
      if (!halfway) {
        setTimeout(() => visibleControls.start("closed"), 400);
      }
    }
    setOpen(!open);
  }

  return (
    <div>
      <motion.div
        className="fixed left-4 top-4 z-40 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-[#fec0ad]"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onClick={handleClick}
        variants={{
          closed: {
            scale: 0,
            transition: { duration: 0.25 },
          },
          opened: {
            scale: 1,
            transition: { duration: 0.5, type: "spring", damping: 12 },
          },
        }}
        initial="closed"
        animate={visibleControls}
      >
        <motion.div
          className="absolute h-1 w-8 rounded-full bg-[#ffffff]"
          variants={{
            burger: { y: -5, rotate: 0 },
            hover: { y: -7, rotate: 0 },
            x: { y: 0, rotate: 45 },
          }}
          initial="burger"
          animate={iconControls}
          transition={{ type: "spring", damping: 8 }}
        />
        <motion.div
          className="absolute h-1 w-8 rounded-full bg-[#ffffff]"
          variants={{
            burger: { y: 5, rotate: 0 },
            hover: { y: 7, rotate: 0 },
            x: { y: 0, rotate: -45 },
          }}
          initial="burger"
          animate={iconControls}
          transition={{ type: "spring", damping: 8 }}
        />
      </motion.div>
      <motion.div
        className="fixed z-30 h-[750px] w-[1500px] bg-[#fec0ad]"
        style={{
          rotate: "-60deg",
          borderBottomLeftRadius: "100% 75%",
          borderBottomRightRadius: "100% 75%",
        }}
        variants={{
          closed: {
            x: -900,
            y: -900,
            transition: {
              duration: 0.75,
              type: "spring",
              ease: "easeInOut",
              delay: 0.2,
            },
          },
          opened: {
            x: -800,
            y: -50,
            transition: { duration: 1, type: "spring", ease: "easeInOut" },
          },
        }}
        initial="closed"
        animate={paneControls}
      />
      <motion.div
        className="fixed left-16 top-32 z-40 text-5xl text-[#ffffff]"
        variants={{
          closed: {
            opacity: 0,
            x: "-100%",
            transition: {
              ease: "easeIn",
              type: "spring",
              damping: 15,
            },
          },
          opened: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.1,
              ease: "easeOut",
              type: "spring",
              damping: 15,
            },
          },
        }}
        initial="closed"
        animate={paneControls}
        transition={{ duration: 0.75, type: "spring" }}
      >
        <SlideLink href="/" text="About" />
      </motion.div>
      <motion.div
        className="fixed left-16 top-48 z-40 text-5xl text-[#ffffff]"
        variants={{
          closed: {
            opacity: 0,
            x: "-100%",
            transition: {
              ease: "easeIn",
              type: "spring",
              damping: 15,
            },
          },
          opened: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.2,
              ease: "easeOut",
              type: "spring",
              damping: 15,
            },
          },
        }}
        initial="closed"
        animate={paneControls}
      >
        <SlideLink href="/" text="Resume" />
      </motion.div>
      <motion.div
        className="fixed left-16 top-64 z-40 text-5xl text-[#ffffff]"
        variants={{
          closed: {
            opacity: 0,
            x: "-100%",
            transition: {
              ease: "easeIn",
              type: "spring",
              damping: 15,
            },
          },
          opened: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              ease: "easeOut",
              type: "spring",
              damping: 15,
            },
          },
        }}
        initial="closed"
        animate={paneControls}
        transition={{ duration: 0.75, type: "spring" }}
      >
        <SlideLink href="/" text="Contact" />
      </motion.div>
    </div>
  );
}
