// import React from "react";

import Button from "../../ReusableComponents/ButtonComponent";
import { skillList } from "../../ReusableComponents/SkillList";
import { TitleComponents } from "../../ReusableComponents/TitleComponents";
import "./about.scss";

function About() {
  return (
    <div id="about-page" className="about-section">
      <div className="about-inner-div">
        <TitleComponents titleText={"About Me"} />
        <div className="skills-section">
          <div className="about-me">
            <h4 className="about-subs">Get to Know Me!!!</h4>
            <p className="skill-para">
              I&lsquo;m a passionate and creative frontend developer with a
              strong desire to craft beautiful and interactive web experiences.
              My journey in web development has allowed me to become proficient
              in a variety of technologies. I&lsquo;m also dedicated to staying
              up-to-date with the ever-evolving web development landscape,
              continually seeking opportunities for professional growth.
            </p>
          </div>
          <div className="skills-div">
            <h4 className="about-subs">My Skills</h4>
            <div className="skills-para">
              {skillList.map((list) => {
                return (
                  <div key={list} className="skills-list">
                    {list}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="about-btn">
          <Button
            btnText={"Contact Me"}
            style={{ backgroundColor: "#e20a4a", color: "#fff0f5" }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
