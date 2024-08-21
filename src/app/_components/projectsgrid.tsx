import { motion } from "framer-motion";
import ProjectLink from "./projectlink";

export default function ProjectsGrid() {
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
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App to track highlights and tasks for each month, application of Java and JavaFX, following the MVC pattern."
            href="/"
          />
        </motion.div>
        <motion.div
          className="col-start-2 col-end-4 origin-top rounded-xl bg-orange-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App to track highlights and tasks for each month, application of Java and JavaFX, following the MVC pattern."
            href="/"
          />
        </motion.div>
        <motion.div
          className="origin-top-right rounded-xl bg-green-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App to track highlights and tasks for each month, application of Java and JavaFX, following the MVC pattern."
            href="/"
          />
        </motion.div>
        <motion.div
          className="origin-bottom-left rounded-xl bg-black"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App that tracks highlights and tasks for each month. Built with Java and JavaFX, following the MVC pattern."
            href="/"
          />
        </motion.div>
        <motion.div
          className="row-start-2 row-end-4 origin-bottom rounded-xl bg-red-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App to track highlights and tasks for each month, application of Java and JavaFX, following the MVC pattern."
            href="/"
          />
        </motion.div>
        <motion.div
          className="col-start-3 col-end-5 row-start-2 row-end-4 origin-bottom-right rounded-xl bg-yellow-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="type-0"
            icons="javascript vitejs react tailwindcss mongodb"
            blurb="Site that checks if a user inputted passcode has been previously entered into the site. Built with Vite and React, and uses an Atlas MongoDB database. A custom Spline 3d numpad displays user input."
            href="/"
          />
        </motion.div>
      </div>
    </div>
  );
}
