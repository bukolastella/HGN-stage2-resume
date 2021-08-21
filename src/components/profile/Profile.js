import React from "react";
import classes from "./Profile.module.css";
import { motion } from "framer-motion";

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

const Profile = () => {
  return (
    <div className={classes.Profile}>
      <h1>Abolarin Bukola</h1>
      <motion.h3
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, stiffness: 50, type: "spring" }}
      >
        {"< Front-End Developer />"}
      </motion.h3>
      <motion.p variants={container} initial="hidden" animate="visible">
        Passionate, task-driven front-end web developer with a flair for
        building responsive and visually appealing websites with clean code.
        Hard worker with good communication skills looking for the right
        environment that will help me learn and advance my skills.
      </motion.p>
    </div>
  );
};

export default Profile;
