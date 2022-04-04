import React from 'react'
import './testimonials.css'
import FAISAL from '../../assets/testimonials/1.jpeg'
import DR from '../../assets/testimonials/2.jpeg'
import JON from '../../assets/testimonials/3.jpg'
import BLAIZE from '../../assets/testimonials/4.jpeg'
import BYAMBWENU from '../../assets/testimonials/5.jpg'
import RICHARD from '../../assets/testimonials/6.png'
import KUTOSI from '../../assets/testimonials/7.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const clients = [
  {
    id: 1,
    image: FAISAL,
    client: 'Mr. Mulalira Faisal Umar',
    position: 'Rtd Founding Partner (Nabukenya, Mulalira & Co. Advpcates)',
    review: ' There was timely delivery of the law firm website. The entire design and handover process was smooth and quick. In addition there was customer care around the clock and custom tutorials recorded for the team for a quicker learning Curve.'
  },
  {
    id: 2,
    image: DR,
    client: 'Dr. Everest Turyahikayo',
    position: 'CEO (Komptenz Trainers)',
    review: 'I contracted Brian through ISCHYROS COMPANY LTD to Plan,design a website with a payment system that is compatible with the Ugandan Mobile Money System. He did a great job they also give me my ICT support.'
  },
  {
    id: 3,
    image: JON,
    client: 'Mr. Jonathan Kahwa',
    position: 'Senior Research Analyst (Researchtec Global)',
    review: 'I have been a client of Brian for over 2 years and his expertise is immense. We run a research company with a custom paying system. He repealled the ordinary wordpress dashboard and built a Custom Dashboard for the Company.'
  },
  {
    id: 4,
    image: BLAIZE,
    client: 'Mr. Mwebe Blaize',
    position: 'Human Reseource Manager (Rimo Research Services)',
    review: 'I have been a client of Brian for over 2 years and his expertise is immense. We run a research company with a custom paying system. He repealled the ordinary wordpress dashboard and built a Custom Dashboard for the Company.'
  },
  {
    id: 5,
    image: BYAMBWENU,
    client: 'Mr. Mwebe Blaize',
    position: 'Head / Climate Change Ambassador (CMC)',
    review: 'Brian is a great Designer and Develper. He accomplishes projects on time. He is not just about time but also the quality attached to the delivery. The CMCEAC2030 website ws completed in record time using the latest technologies and also implimented a custom system that the organisation needed.'
  },
  {
    id: 6,
    image: BLAIZE,
    client: 'Mr. Mwebe Blaize',
    position: 'CEO AND PROJECTS MANAGER (Growth Spring)',
    review: 'Brian was contracted to build a custom financial system for Growth Spring. Growth Spring is an investor company. We needed a finsncial system to track all the transactions that happen and also update the group of investors about the state of businesses. He developed the WEB APP that is very functional and meets all our needs.'
  },
  {
    id: 7,
    image: KUTOSI,
    client: 'Mr. Kutosi Humphrey',
    position: 'CEO (HUMCONSULTS)',
    review: 'Probably the best Web Developer I\'ve ever worked with. He is about social investing in his clients. Brian himself saw to it that my website was up and running without tearing my pockets! I cannot be more grateful. Recommended without the slightest hesitation!'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5> Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      className="container testimonials__container">


      {
        clients.map((clients)=>{
          return(
              <SwiperSlide key={clients.id} className="testimonial">
                <div className="client__container">
                  <div className="client__avatar">
                    <img src={clients.image} alt=""/>
                  </div>
                  <h5 className='client__name'>{clients.client}</h5>
                  <h6 className='client__position'>{clients.position}</h6>
                  <small className="client__review">
                    {clients.review}
                  </small>
                </div>
              </SwiperSlide>
            )
        })
      } 
      </Swiper>
    </section>
  )
}

export default Testimonials