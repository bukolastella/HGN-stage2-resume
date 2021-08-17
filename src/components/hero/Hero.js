import React from "react";
import classes from "./Hero.module.css";
import { motion } from "framer-motion";
import resume from "./Bukola'sResume.pdf";
// import { download } from "react-mdl";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
const button = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <motion.span variants={container} initial="hidden" animate="visible">
        Hello, I'm
      </motion.span>
      <motion.span variants={container} initial="hidden" animate="visible">
        Abolarin Bukola
      </motion.span>
      <motion.span
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, stiffness: 50, type: "spring" }}
      >
        {`< Frontend Developer />`}
      </motion.span>
      <motion.span variants={container} initial="hidden" animate="visible">
        Hi there! I'm a Passionate, task-driven front-end web developer with a
        flair for building responsive and visually appealing websites with clean
        code. Hard worker with good communication skills looking for the right
        environment that will help me learn and advance my skills. my current
        skills set include HTML, CSS, Javscript, React. Find below my attached
        resume.
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={button}
        whileHover="hover"
      >
        <a href={resume} download>
          Resume
        </a>
      </motion.span>
    </div>
  );
};

export default Hero;
