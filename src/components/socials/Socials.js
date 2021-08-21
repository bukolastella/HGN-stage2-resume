import React from "react";
import SocialFlex from "./SocialFlex";
import classes from "./Socials.module.css";
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

const Socials = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={classes.Socials}
    >
      <SocialFlex>
        <i className="fas fa-envelope"></i>
        <a href="abolarinbukolastella@gmail.com">
          abolarinbukolastella@gmail.com
        </a>
      </SocialFlex>
      <SocialFlex>
        <i className="fab fa-github"></i>
        <a href="github.com/bukolastella">github.com/bukolastella</a>
      </SocialFlex>
      <SocialFlex>
        <i className="fab fa-linkedin-in"></i>
        <a href="linkedin.com/in/bukola-abolarin">
          linkedin.com/in/bukola-abolarin
        </a>
      </SocialFlex>
      <SocialFlex>
        <i className="fab fa-twitter"></i>
        <a href="https://twitter.com/B1stella">@B1stella</a>
      </SocialFlex>
      <SocialFlex>
        <i className="fas fa-link"></i>
        <a href="abolarinbukola.netlify.app/">abolarinbukola.netlify.app/</a>
      </SocialFlex>
    </motion.div>
  );
};

export default Socials;
