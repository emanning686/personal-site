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
      <div className="flex w-full items-center justify-center pt-32 text-7xl font-light text-[#2b2d46]">
        <ReactTyped
          strings={["Technologies"]}
          typeSpeed={40}
          startWhenVisible
        />
      </div>
      <div className="w-full p-12 text-4xl font-semibold text-[#2b2d46]">
        <h2>Languages</h2>
        <div className="flex flex-wrap gap-4">
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
        </div>
        <h2>Frameworks</h2>
        <div className="flex flex-wrap gap-4">
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original-wordmark.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
        </div>
        <h2>Tools</h2>
        <div className="flex flex-wrap gap-4">
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" />
        </div>
      </div>
    </motion.div>
  );
}
