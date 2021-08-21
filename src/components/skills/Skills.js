import React from "react";
import SkillsFlex from "./SkillsFlex";
import classes from "./Skills.module.css";
import useScroll from "../../hooks/use-scroll";

const Skills = () => {
  const { refspotlight } = useScroll();

  return (
    <div
      className={classes.Skills}
      ref={refspotlight}
      style={{
        opacity: 0,
        transform: "translateY(8rem)",
      }}
    >
      <h1>SKILLS AND TECHNOLOGIES</h1>
      <div className={classes.Flex}>
        <SkillsFlex name="HTML5" />
        <SkillsFlex name="CSS3" />
        <SkillsFlex name="JavaScript" />
        <SkillsFlex name="React" />
        <SkillsFlex name="Python" />
        <SkillsFlex name="SASS" />
        <SkillsFlex name="TailWind" />
        <SkillsFlex name="Redux" />
        <SkillsFlex name="Rest APIs" />
        <SkillsFlex name="Version Control" />
      </div>
    </div>
  );
};

export default Skills;
