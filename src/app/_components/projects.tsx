import { motion } from "framer-motion";

export default function Projects() {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid h-[750px] w-3/4 grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-2">
        <motion.div
          className="row-start-1 row-end-3 origin-top-left rounded-xl bg-blue-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="col-start-2 col-end-4 origin-top rounded-xl bg-orange-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="origin-top-right rounded-xl bg-green-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="origin-bottom-left rounded-xl bg-black"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="row-start-2 row-end-4 origin-bottom rounded-xl bg-red-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
        <motion.div
          className="col-start-3 col-end-5 row-start-2 row-end-4 origin-bottom-right rounded-xl bg-yellow-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
}
