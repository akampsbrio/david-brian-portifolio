import React from 'react'
import './footer.css'
import logo from '../../assets/david-brian.png'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><img src={logo} alt="logo"/></a>
      
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="mailto:akampsbrio@gmail.com" target="_blank" ><MdOutlineEmail className="icon"/></a>
        <a href="whatsapp://send?abid=256789802843&text=Hello%2C%20Brian!" target="_blank" ><BsWhatsapp className="icon"/></a>
        <a href="https://www.linkedin.com/in/akampurira-brian-david-54a0131b5/" target="_blank" ><BsLinkedin className="icon"/></a>
        <a href="https://github.com/akampsbrio" target="_blank" ><FaGithub className="icon"/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Akampurira Brian David. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer