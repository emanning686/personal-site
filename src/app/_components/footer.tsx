import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="relative flex h-[850px] w-full flex-col justify-between border border-[#4b4d6c] bg-[#211f21]"
      style={{
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 h-[850px] w-full p-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[#d7d6ce]">My Links</h1>
            <Link href={"https://www.linkedin.com/in/eric-manning2005/"}>
              <h2 className="text-xl font-semibold text-[#bbaeb5]">LinkedIn</h2>
            </Link>
            <Link href={"https://github.com/emanning686"}>
              <h2 className="text-xl font-semibold text-[#bbaeb5]">GitHub</h2>
            </Link>
            <Link href={"https://www.instagram.com/emanning686/"}>
              <h2 className="text-xl font-semibold text-[#bbaeb5]">
                Instagram
              </h2>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-[#d7d6ce]">Reach Out</h1>
            <h2 className="text-xl font-semibold text-[#bbaeb5]">
              emanning1030@gmail.com
            </h2>
            <h2 className="text-xl font-semibold text-[#bbaeb5]">
              ejm8493@rit.edu
            </h2>
            <h2 className="text-xl font-semibold text-[#bbaeb5]">
              (978)-409-8378
            </h2>
          </div>
        </div>
        <div className="p-10 text-[100px] font-extrabold text-[#f79c95] lg:text-[200px]">
          <motion.h1
            className="[--gap:50px] lg:[--gap:75px]"
            style={{ y: "var(--gap)" }}
          >
            Eric
          </motion.h1>
          <h1>Manning</h1>
        </div>
        <h1 className="absolute bottom-0 right-0 p-4 text-2xl font-bold text-[#d7d6ce]">
          {"No copyright whatsoever ©" + new Date().getFullYear()}
        </h1>
      </div>
    </div>
  );
}
