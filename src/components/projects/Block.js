import React from "react";
import useScroll from "../../hooks/use-scroll";
import classes from "./Block.module.css";

const Block = (props) => {
  const { refspotlight } = useScroll();
  return (
    <div
      className={classes.Block}
      ref={refspotlight}
      style={{
        opacity: 0,
        transform: "translateY(8rem)",
      }}
    >
      <span>{props.title}</span>
      <p>{props.para}</p>
      <div className={classes.flex}>
        <span className={classes.view}>
          <a href={props.link1} target="_blank" rel="noreferrer">
            Live Site
          </a>
        </span>
        <span className={classes.view}>
          <a href={props.link2} target="_blank" rel="noreferrer">
            GitHub Code
          </a>
        </span>
      </div>
    </div>
  );
};

export default Block;
