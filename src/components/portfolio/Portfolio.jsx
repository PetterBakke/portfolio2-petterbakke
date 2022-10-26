import React from "react";
import SEM from "../../Assets/semester.png";
import JSF from "../../Assets/jsframeworks.png";
import PRO from "../../Assets/project-exam2.png";
import CAL from "../../Assets/calculator.png";
import RWE from "../../Assets/react-weather.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={SEM} alt="semester project 2" />
          </div>
          <h3>This is my semester Project 2</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/semester-project2-Petter-Bakke" className="btn">Github repo</a>
            <a href="https://semester-project2-petter-bakke.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={JSF} alt="JavaScript frameworks CA" />
          </div>
          <h3>This is my JavaScript framework CA</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/jsframeworks_ca-Petter-Bakke" className="btn">Github repo</a>
            <a href="https://jsframeworks-ca-petter-bakke.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PRO} alt="project exam 2" />
          </div>
          <h3>This is my Project exam 2</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/project-exam-2-petter-bakke" className="btn">Github repo</a>
            <a href="https://project-exam-2-petter-bakke.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={CAL} alt="calculator project" />
          </div>
          <h3>This is my Calculator</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/calculator-react-petter-bakke" className="btn">Github repo</a>
            <a href="https://calculator-react-petter-bakke.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={RWE} alt="react weather project" />
          </div>
          <h3>This is my React weather app</h3>
          <div className="portfolio-item cta">
            <a href="https://github.com/PetterBakke/react-weather-app" className="btn">Github repo</a>
            <a href="https://react-weather-app-psi-nine.vercel.app/" className="btn btn-primary">Live site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;