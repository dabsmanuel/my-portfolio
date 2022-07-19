import React from "react";
import "./Experience.css";

import { BsCheck2Circle } from "react-icons/bs";

const Experience = () => {
  return (
    <section
      id="Experience"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <hr></hr>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="skill-bar">
            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> HTML
              </h5>
              <div className="par">
                <div class="skills htmls">90%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> CSS
              </h5>
              <div className="par">
                <div class="skills css">80%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> Bootstrap
              </h5>
              <div className="par">
                <div class="skills bootstrap">80%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> Tailwind
              </h5>
              <div className="par">
                <div class="skills tailwind">80%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> SASS
              </h5>
              <div className="par">
                <div class="skills sass">80%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> JavaScript
              </h5>
              <div className="par">
                <div class="skills javascript">60%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> ReactJs
              </h5>
              <div className="par">
                <div class="skills react">80%</div>
              </div>
            </div>

            <div className="html">
              <h5 className="text-light">
                <BsCheck2Circle /> NextJs
              </h5>
              <div className="par">
                <div class="skills next">70%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
