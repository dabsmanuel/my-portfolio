import React from "react";
import "./Portfolio.css";
import data from "./Portfoliodata";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className="portfolio-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <div className="portfolio-item-image">
                <img src={image} alt="equip" />
              </div>
              <h3>{title}</h3>

              <div className="cta">
                <a className="btn" href={github} target="_blanc">
                  Github
                </a>
                <a className="btn btn-primary" href={demo} target="_blanc">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="button">
        <a href="https://github.com/dabsmanuel">Click to see More</a>
      </div>
    </section>
  );
};

export default Portfolio;
