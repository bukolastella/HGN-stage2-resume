import React from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";

const nav = {
  hover: {
    scale: 1.2,
    color: "#fbae19",
    originX: 0,
  },
};

const Header = ({ scrollHandler }) => {
  return (
    <div className={classes.Header}>
      <span className={classes.image}>
        <img src="https://hng.tech/img/brand-logo.png" alt="logo" />
      </span>

      <motion.span
        className={classes.Hov}
        variants={nav}
        whileHover="hover"
        onClick={scrollHandler}
      >
        <a
          href="https://internship.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Zuri
        </a>
      </motion.span>
    </div>
  );
};

export default Header;
