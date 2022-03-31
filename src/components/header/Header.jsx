import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/david-brian.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Akampurira Brian David</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="Akampurira Brian David" />
        </div>
        <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header 