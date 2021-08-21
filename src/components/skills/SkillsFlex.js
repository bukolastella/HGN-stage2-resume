import React from "react";
import classes from "./SkillsFlex.module.css";

const SkillsFlex = (props) => {
  return (
    <div className={classes.SkillsFlex}>
      <div className={classes.dot}></div>
      {props.name}
    </div>
  );
};

export default SkillsFlex;
