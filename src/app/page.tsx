"use client";
import { useEffect } from "react";

async function createLocomotiveScroll() {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new LocomotiveScroll();
}

export default function Home() {
  useEffect(() => {
    createLocomotiveScroll();
  }, []);
  return (
    <main>
      <div className="flex flex-col gap-4">
        <div className="h-screen w-full bg-orange-400"></div>
        <div className="h-screen w-full bg-orange-400"></div>
        <div className="h-screen w-full bg-orange-400"></div>
      </div>
    </main>
  );
}
