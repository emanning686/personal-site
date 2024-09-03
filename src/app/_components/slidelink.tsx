import { motion } from "framer-motion";

export default function SlideLink({ text }: { text: string }) {
  const topVariants = {
    initial: {
      y: 0,
    },
    hover: {
      y: "-100%",
    },
  };
  const bottomVariants = {
    initial: {
      y: "100%",
    },
    hover: {
      y: 0,
    },
  };

  const transition = {
    duration: 0.25,
    ease: "easeOut",
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="origin-top p-1"
        variants={topVariants}
        transition={transition}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute top-0 origin-bottom p-1"
        variants={bottomVariants}
        transition={transition}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
