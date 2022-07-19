import React from 'react';
import './Experience.css';

import { BsCheck2Circle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        Skills I Have
      </h5>
      <h2
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        My Experience
      </h2>

      <hr></hr>

      <div
        className="container experience_container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
}

export default Experience