import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <motion.div
      className="relative z-10 h-[200vh] w-full bg-[#fed8b4]"
      style={{
        borderTopLeftRadius: "100% 5%",
        borderTopRightRadius: "100% 5%",
      }}
    ></motion.div>
  );
}
