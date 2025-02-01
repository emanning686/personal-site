import { motion } from "framer-motion";
import ProjectLink from "./projectlink";

export default function ProjectsGrid() {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center py-10 lg:h-screen lg:py-0">
      <h1 className="pb-5 text-5xl font-normal text-[#2b2d46] lg:pb-10 lg:text-7xl">
        Projects
      </h1>
      <div className="flex h-auto w-3/4 flex-col gap-2 lg:grid lg:h-[750px] lg:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-rows-[1fr_1fr_1fr]">
        <motion.div
          className="row-start-1 row-end-3 h-auto rounded-xl bg-blue-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="fruit-off"
            icons="javascript vitejs react tailwindcss"
            blurb="Web guessing game about fruit values. Makes API calls for fruit values and images. Built with vite and react, and contains a Spline 3D logo model."
            href="https://fruit-off.netlify.app/"
          />
        </motion.div>
        <motion.div
          className="col-start-2 col-end-4 h-auto rounded-xl bg-orange-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="escape"
            icons="python"
            blurb="Python Curses terminal game and level editor with pathfinding. Uses a BFS algorithm for pathing enemies, and subprocess calls for multiple file operations."
            href="https://github.com/emanning686/Escape"
          />
        </motion.div>
        {/* <motion.div
          className="h-auto rounded-xl bg-green-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="countdown-se"
            icons="typescript vitejs react tailwindcss"
            blurb="Site that counts down to December 12 2024. Built with Vite and React as a one day project. Custom background image changes on refresh."
            href="https://github.com/emanning686/countdown-se"
          />
        </motion.div> */}
        <motion.div
          className="h-auto rounded-xl bg-green-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="ufund"
            icons="java spring typescript angularjs"
            blurb="Full stack web application for managing donations and needs for the Sleep in Heavenly Peace foundation. Created for Intro to Software Engineering, using AngularJS and Java-Spring"
            href="https://github.com/emanning686/"
          />
        </motion.div>
        <motion.div
          className="h-auto rounded-xl bg-black"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="planner-tracker"
            icons="java"
            blurb="App that tracks highlights and tasks for each month. Built with Java and JavaFX, following the MVC pattern."
            href="https://github.com/emanning686/PlannerTracker"
          />
        </motion.div>
        <motion.div
          className="row-start-2 row-end-4 h-auto rounded-xl bg-red-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="quizlet-sucks"
            icons="python"
            blurb="Python Curses terminal flash card deck creator, and study tool. Uses menu system for file creation and mode selection, and card animations for actions."
            href="https://github.com/emanning686/QuizletSucks"
          />
        </motion.div>
        <motion.div
          className="col-start-3 col-end-5 row-start-2 row-end-4 h-auto rounded-xl bg-yellow-400"
          variants={variants}
          initial="initial"
          whileInView={"animate"}
          viewport={{ amount: 0.5 }}
        >
          <ProjectLink
            name="type-0"
            icons="javascript vitejs react tailwindcss mongodb"
            blurb="Site that checks if a user inputted passcode has been previously entered into the site. Built with Vite and React, uses an Atlas MongoDB database and Vercel for site hosting. A custom Spline 3D numpad displays user input."
            href="https://github.com/emanning686/type-0"
          />
        </motion.div>
      </div>
    </div>
  );
}
