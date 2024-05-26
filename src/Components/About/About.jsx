import { useEffect, useState } from "react";
import "./About.css";
import me from "../../Assets/dabs1.png";
import Aboutprops from "./Aboutprops";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const checkDate = () => {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();

      if (month === 5 && day === 1) {
        setCounter(prevCounter => prevCounter + 1);
      }
    };

    checkDate(); // Call on initial render
  });

  return (
    <section>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div
          className="about_me"
          id="About">
          <div className="about-me-image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div
          className="about-content"
          id="About">
          <p>
            I am a frontend developer with over {counter} years of experience working
            with frontend web technologies, building responsive, optimized and
            accessible interfaces that give users an amazing experience. I love
            listening to music. I like to think I am not the only one who enjoys
            listening to music while coding😅. It helps ease the mind. I
            play the guitar and watch movies in my free time. Technologies I work
            with includes HTML, 2CSS, Javascript, React, NextJs, Bootstrap,
            Materialize css, tailwindcss, styled-components, and nodeJs.
          </p>
          <div className="about-props">
            <Aboutprops
              icons={<FaAward />}
              title="Experience"
              params="2+ Years Working"
            />

            <Aboutprops
              icons={<VscFolderLibrary />}
              title="Projects"
              params="10+ completed"
            />
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
