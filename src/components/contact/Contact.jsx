import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ptvjoyn', 'template_hfxbff8', form.current, 'ODqjosHegO9UX-7Ks')
  e.target.reset();  
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>akampsbrio@gmail.com</h5>
            <a href="mailto:akampsbrio@gmail.com" target="_blank">Send an Email</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+256-789-902-843</h5>
            <a href="whatsapp://send?abid=256789802843&text=Hello%2C%20Brian!" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
          <BsLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/akampurira-brian-david-54a0131b5/" target="_blank">View Profile</a>
          </article>
        </div>

      {/*END OF CONTACT OPTIONS*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact