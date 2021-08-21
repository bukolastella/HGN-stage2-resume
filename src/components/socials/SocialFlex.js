import React from "react";
import classes from "./SocialFlex.module.css";

const SocialFlex = (props) => {
  return <div className={classes.SocialFlex}>{props.children}</div>;
};

export default SocialFlex;
