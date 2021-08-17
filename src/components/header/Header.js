import React from "react";
import classes from "./Header.module.css";
import { motion } from "framer-motion";
import img from "../../assets/9-512.png";
import { Link } from "react-scroll";

const button = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 10px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
  },
};
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
        <Link
          to="/https://internship.zuri.team/"
          spy={true}
          smooth={true}
          offset={-150}
          duration={10}
        >
          Zuri
        </Link>
      </motion.span>
    </div>
  );
};

export default Header;
