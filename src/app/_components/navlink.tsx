import { motion } from "framer-motion";

export default function NavLink({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  const topVariants = {
    initial: {
      scaleY: 1,
    },
    hover: {
      scaleY: 0,
    },
  };
  const bottomVariants = {
    initial: {
      scaleY: 0,
    },
    hover: {
      scaleY: 1,
    },
  };

  const transition = {
    duration: 0.25,
    ease: "easeOut",
  };

  return (
    <motion.div className="relative" initial="initial" whileHover="hover">
      <motion.div
        className="origin-top"
        variants={topVariants}
        transition={transition}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute top-0 origin-bottom"
        style={{ color }}
        variants={bottomVariants}
        transition={transition}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
