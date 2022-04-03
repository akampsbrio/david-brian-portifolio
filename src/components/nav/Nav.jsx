import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#" title="Home" onClick={()=>setActiveNav('#')} className={activeNav=== '#' ? 'active':''} ><AiOutlineHome/></a>
        <a href="#about" title="About" onClick={()=>setActiveNav('#about')} className={activeNav=== '#about' ? 'active':''}><AiOutlineUser/></a>
        <a href="#experience" title="Experience" onClick={()=>setActiveNav('#experience')} className={activeNav=== '#experience' ? 'active':''} ><BiBook/></a>
        <a href="#services" title="Services" onClick={()=>setActiveNav('#services')} className={activeNav=== '#services' ? 'active':''} ><MdOutlineDesignServices/></a>
        <a href="#contact" title="Contact" onClick={()=>setActiveNav('#contact')} className={activeNav=== '#contact' ? 'active':''} ><BiMessageSquareDetail/></a>
      </nav>
    )
}

export default Nav