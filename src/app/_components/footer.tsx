import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="relative h-[500px] w-full border border-[#4b4d6c] bg-[#211f21] lg:h-[850px]"
      style={{
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="fixed bottom-0 flex h-[500px] w-full flex-col justify-between p-4 lg:h-[850px]">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-[#d7d6ce] lg:text-2xl">
              My Links
            </h1>
            <Link href={"https://www.linkedin.com/in/eric-manning2005/"}>
              <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
                LinkedIn
              </h2>
            </Link>
            <Link href={"https://github.com/emanning686"}>
              <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
                GitHub
              </h2>
            </Link>
            <Link href={"https://www.instagram.com/emanning686/"}>
              <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
                Instagram
              </h2>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-[#d7d6ce] lg:text-2xl">
              Reach Out
            </h1>
            <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
              emanning1030@gmail.com
            </h2>
            <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
              ejm8493@rit.edu
            </h2>
            <h2 className="text-lg font-semibold text-[#bbaeb5] lg:text-xl">
              (978)-409-8378
            </h2>
          </div>
        </div>
        <div className="p-5 text-[75px] font-extrabold text-[#f79c95] lg:p-10 lg:text-[200px]">
          <motion.h1
            className="[--gap:25px] lg:[--gap:75px]"
            style={{ y: "var(--gap)" }}
          >
            Eric
          </motion.h1>
          <h1>Manning</h1>
        </div>
        <h1 className="absolute bottom-0 right-0 p-4 text-lg font-bold text-[#bbaeb5] lg:text-xl">
          {"No copyright whatsoever ©" + new Date().getFullYear()}
        </h1>
      </div>
    </div>
  );
}
