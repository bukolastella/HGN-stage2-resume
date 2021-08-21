import React from "react";
import Block from "./Block";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <div className={classes.Main}>
      <h1>Projects</h1>
      <p>I love building stuff. These are some I have worked on</p>
      <div className={classes.Project}>
        <Block
          title="chatclone"
          para="A messaging application built with react and firebase that allows real-time text messages"
          link1="https://bukolastella.github.io/whatsapp_clone/"
          link2="https://github.com/bukolastella/whatsapp_clone"
        />
        <Block
          title="30sec"
          para="A 30 seconds audio streaming music web application built with react"
          link1="https://bukolastella.github.io/spotify-clone/#/"
          link2="https://github.com/bukolastella/spotify-clone"
        />
        <Block
          title="banksafe"
          para="A web application built with react and firebase for a banking platform"
          link1="https://bukolastella.github.io/banking-app/"
          link2="https://github.com/bukolastella/banking-app"
        />
        <Block
          title="foodie"
          para="An e-commerce application built with react offering food ordering services"
          link1="https://bukolastella.github.io/food-ordering-app/"
          link2="https://github.com/bukolastella/food-ordering-app"
        />
      </div>
    </div>
  );
};

export default Project;
