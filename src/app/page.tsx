"use client";
import { useEffect } from "react";
import Nav from "./_components/nav";

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
      <Nav />
      <div className="flex flex-col gap-4"></div>
    </main>
  );
}
