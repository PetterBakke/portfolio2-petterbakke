import React from 'react'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className='container about-container'>
      <div className='about-content'>
        <div className='about-cards'>
          <article className='about-card'>
            <FaAward className='about-icon' />
            <h5>Experience</h5>
            <small>Newly graduated</small>
          </article>
          <article className='about-card'>
            <VscFolderLibrary className='about-icon' />
            <h5>Projects</h5>
            <small>20+ completed</small>
          </article>
        </div>
        <p></p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
    </div>
  </section>;
}

export default About;