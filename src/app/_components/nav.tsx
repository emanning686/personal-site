import NavLink from "./navlink";

export default function Nav() {
  return (
    <div className="flex h-24 w-full items-center justify-between bg-[#2b2d46] px-4 text-3xl font-light text-[#d7d6ce]">
      <div>Eric Manning</div>
      <div className="flex gap-2">
        <NavLink href="/" text="Projects" />
        <NavLink href="/" text="Resume" />
        <NavLink href="/" text="Contact" />
      </div>
    </div>
  );
}
