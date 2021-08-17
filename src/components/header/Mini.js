import React, { useState } from "react";
import classes from "./Mini.module.css";
import img from "../../assets/9-512.png";
import { Link } from "react-scroll";

const Mini = () => {
  const [state, setstate] = useState(false);
  const openHandler = () => {
    setstate((prev) => !prev);
  };
  return (
    <div className={classes.Mini}>
      <span className={classes.image}>
        <img src={img} alt="kj" />
      </span>
      {state ? (
        <div className={classes.MiniDiv}>
          <div>
            <span>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={10}
              >
                About
              </Link>
            </span>
            <span>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-60}
                duration={10}
              >
                Projects
              </Link>
            </span>
            <span>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={10}
              >
                Contact
              </Link>
            </span>
          </div>
          <span className={classes.cancel} onClick={openHandler}>
            <i className="fas fa-times"></i>
          </span>
        </div>
      ) : (
        <div className={classes.menu} onClick={openHandler}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      {/* */}
    </div>
  );
};

export default Mini;
