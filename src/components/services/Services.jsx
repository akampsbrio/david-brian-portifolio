import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="conatiner services__container">
        <article className="service">
          <div className="service__head">
            <h3>FRONTEND</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Web Design including Dashbaords</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Saas and App Designs</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Graphics Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Redesign and Resturucturing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Competitive and tailored design</p>
            </li>
          </ul>
        </article>
      {/*END OF FRONT END*/}

        <article className="service">
          <div className="service__head">
            <h3>BACKEND</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Database Planning, Design and Implimentation</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Business Process Modelling</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Alogarithm Design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Custom CMS Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Coding and Debugging</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>UI tests to optimise perfomance</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Impliment ANY API needed</p>
            </li>
          </ul>
        </article>
      {/*END OF BACKEND*/}

        <article className="service">
          <div className="service__head">
            <h3>BONUS SERVICES</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Domain Registration</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Set Up web Hosting</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Manage your VPS</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Content Creation</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Manage SEO</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <p>Consultations</p>
            </li>
          </ul>
        </article>
      </div>
    </section>  
  )
}

export default Services