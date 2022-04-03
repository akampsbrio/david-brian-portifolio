import React from 'react'
import './clones.css'
import {FaGithub} from 'react-icons/fa'
import SOMA from '../../assets/portifolio/1.png'
import _123WRITING from '../../assets/portifolio/2.png'
import NMA from '../../assets/portifolio/3.png'
import CMCEAC from '../../assets/portifolio/4.png'
import ISCHYROS from '../../assets/portifolio/5.png'
import CLC from '../../assets/portifolio/6.png'
import RESEARCHTEC from '../../assets/portifolio/7.png'
import GROWTHSPRING from '../../assets/portifolio/8.png'
import HUMCONSULTS from '../../assets/portifolio/9.png'
import RIMO from '../../assets/portifolio/10.png'
import TICVAC from '../../assets/portifolio/11.png'

const data = [
  {
    id: 1,
    image: SOMA,
    title: 'SOMA ANDROID & WEB APP',
    link: 'https://play.google.com/store/apps/details?id=soma.ug&hl=en&gl=US'
  },
  {
    id: 2,
    image: _123WRITING,
    title: '123 WRITING',
    link: 'https://www.123writing.com/'
  },
  {
    id: 3,
    image: NMA,
    title: 'Nabukenya, Mulalira & Company Advocates',
    link: 'https://www.nma-advocates.com/'
  },
  {
    id: 4,
    image: CMCEAC,
    title: 'CITEZENS MASS CAMPAIGN',
    link: 'https://www.cmceac2030.com/'
  },
  {
    id: 5,
    image: ISCHYROS,
    title: 'IDCHYROS COMPANY LTD',
    link: 'https://www.ischyros-ltd.com/'
  },
  {
    id: 6,
    image: CLC,
    title: 'Competence Learing Center',
    link: 'https://kompetenztrainers.com/'
  },
  {
    id: 7,
    image: RESEARCHTEC,
    title: 'Researchtec Global Website',
    link: 'https://www.researchtecglobal.com/'
  },
  {
    id: 8,
    image: GROWTHSPRING,
    title: 'GROWTH SPRING',
    link: 'http://growthspring.ischyros-ltd.com/'
  },
  {
    id: 9,
    image: HUMCONSULTS,
    title: 'HUMCONSULTS',
    link: 'https://www.humconsults.com/'
  },
  {
    id: 10,
    image: RIMO,
    title: 'Rimo research Services',
    link: 'https://www.rimoresearchservices.com/'
  }
  
]

const Clones = () => {
  return (
    <section id="clone">
      <h5>My Clones</h5>
      <h2>Clones and Github</h2>
      <br/>
      <br/>
      <h2>Coming Soon</h2>

      <div className="container clone__container">
        {/*{
          data.map((data) => {
            return(
                <article key={data.id} className="clone__item">
                  <div className="clone__item-image">
                    <img src={data.image} alt={data.title}/>
                  </div>
                  <h3>{data.title}</h3>
                  <div className="clone__item-cta">
                    <a href={data.link} className="btn btn-primary" target="_blank"><FaGithub/> Github</a>
                  </div>
                </article>
              )
          })
        }*/}

      </div>
    </section>  
  )
}

export default Clones