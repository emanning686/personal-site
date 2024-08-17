import Magnet from "./magnet";
import Image from "next/image";

export default function Technologies() {
  return (
    <div
      className="relative z-10 h-[80vh] w-full bg-[#fed8b4]"
      style={{
        borderTopLeftRadius: "100% 5%",
        borderTopRightRadius: "100% 5%",
      }}
    >
      <div className="flex w-full items-center justify-center pt-32 text-7xl font-light text-[#2b2d46]">
        <h1>Technologies</h1>
      </div>
      <div className="w-full p-12 text-4xl font-semibold text-[#2b2d46]">
        <h2>Languages</h2>
        <div className="flex flex-wrap gap-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="icon"
            width={100}
            height={100}
          />
          <Magnet>
            <button className="rounded-lg border-0 bg-black p-12 font-bold text-white">
              Magnetic Button
            </button>
          </Magnet>
          {/* <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
          <Magnet src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" /> */}
        </div>
      </div>
    </div>
  );
}
