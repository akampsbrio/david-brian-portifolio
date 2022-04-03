import React from 'react'
import './about.css'
import ME from '../../assets/david-2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="David Brian"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>17+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>37 Projects Completed</small>
            </article>
          </div>


          <p>
            I am a Fullstack Web and App developer with 5+ years of Web development using JS Platforms like React and Angular in combination with HTML, CSS, BOOTSRAP, NEXT JS, REDUX etc. Im very handy in using MySQL, Firebase and MongoDB in combination with PHP and NodeJS as backend Frameworks. <br/>
            <a href="#contact" className="btn btn-primary mt">Let's Talk</a>
          </p>
         
        </div>
      </div> 
    </section>
  )
}

export default About