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
      className="relative z-10 h-[80vh] w-full bg-[#fed8b4]"
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
      <div className="flex w-full items-center justify-center pt-32 text-4xl font-light text-[#2b2d46] md:text-7xl">
        <ReactTyped
          strings={["Technologies"]}
          typeSpeed={60}
          startWhenVisible
        />
      </div>
      <div className="flex w-full flex-col items-center p-12 text-xl font-semibold text-[#2b2d46] md:text-4xl">
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
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
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
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original-wordmark.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
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
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
            <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
