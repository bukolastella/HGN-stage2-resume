import React from "react";
import useScroll from "../../hooks/use-scroll";
import classes from "./Education.module.css";

const Education = () => {
  const { refspotlight } = useScroll();
  return (
    <div
      className={classes.Education}
      ref={refspotlight}
      style={{
        opacity: 0,
        transform: "translateY(8rem)",
      }}
    >
      <h1>EDUCATION</h1>
      <h2>Computer Engineering</h2>
      <h3>University Of Ilorin</h3>
      <p>Expected Graduation: 2022</p>
    </div>
  );
};

export default Education;
