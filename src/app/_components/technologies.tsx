import { useRef } from "react";
import Magnet from "./magnet";
import { ReactTyped } from "react-typed";
import { motion, useScroll } from "framer-motion";

export default function Technologies({
  setHeroHidden,
}: {
  setHeroHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      ref={ref}
      className="relative z-10 h-auto w-full bg-[#fed8b4] pb-24"
      style={{
        borderTopLeftRadius: "100% 5%",
        borderTopRightRadius: "100% 5%",
        borderBottomLeftRadius: "100% 5%",
        borderBottomRightRadius: "100% 5%",
      }}
      onViewportEnter={() => setHeroHidden(false)}
      onViewportLeave={() => scrollYProgress.get() > 0.9 && setHeroHidden(true)}
      viewport={{ amount: "all" }}
    >
      <div className="flex w-full items-center justify-center pt-16 text-5xl font-light text-[#2b2d46] md:pt-32 md:text-7xl">
        <ReactTyped
          strings={["Technologies"]}
          typeSpeed={60}
          startWhenVisible
        />
      </div>
      <div className="flex w-full flex-col items-center p-12 text-2xl font-semibold text-[#2b2d46] md:text-4xl">
        <div className="flex flex-col gap-4">
          <h2>Languages</h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
              x: "-25%",
            }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ amount: 0.5 }}
          >
            <Magnet src="java.svg" />
            <Magnet src="python.svg" />
            <Magnet src="javascript.svg" />
            <Magnet src="typescript.svg" />
            <Magnet src="html.svg" />
            <Magnet src="css.svg" />
            <Magnet src="sql.svg" />
            <Magnet src="c.svg" />
            <Magnet src="cpp.svg" />
          </motion.div>
          <h2>Frameworks</h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
              x: "-25%",
            }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ amount: 0.75 }}
          >
            <Magnet src="nodejs.svg" />
            <Magnet src="express.svg" />
            <Magnet src="react.svg" />
            <Magnet src="nextjs.svg" />
            <Magnet src="vitejs.svg" />
            <Magnet src="tailwindcss.svg" />
            <Magnet src="junit.svg" />
            <Magnet src="pytest.svg" />
            <Magnet src="postgresql.svg" />
            <Magnet src="mongodb.svg" />
          </motion.div>
          <h2>Tools</h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{
              opacity: 0,
              filter: "blur(5px)",
              x: "-25%",
            }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ amount: 0.5 }}
          >
            <Magnet src="git.svg" />
            <Magnet src="linux.svg" />
            <Magnet src="vscode.svg" />
            <Magnet src="postman.svg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
