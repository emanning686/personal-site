import { motion } from "framer-motion";
import Link from "next/link";

export default function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
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
    <Link href={href}>
      <motion.div className="relative" initial="initial" whileHover="hover">
        <motion.div
          className="origin-top"
          variants={topVariants}
          transition={transition}
        >
          {text}
        </motion.div>
        <motion.div
          className="absolute top-0 origin-bottom text-[#fec0ad]"
          variants={bottomVariants}
          transition={transition}
        >
          {text}
        </motion.div>
      </motion.div>
    </Link>
  );
}
