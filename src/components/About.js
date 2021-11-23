import React from "react";
import user from "../data/user"
import Links from "src/components/Links.js";

function About(prop) {
  if (prop = prop.bio) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <Links /> */}
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
      );
  }

}

export default About;
