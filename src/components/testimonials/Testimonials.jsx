import React from 'react'
import './testimonials.css'
import AVA1 from '../../assest/avatar1.jpg'
import AVA2 from '../../assest/avatar2.jpg'
import AVA3 from '../../assest/avatar3.jpg'
import AVA4 from '../../assest/avatar4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data=[
    {
        id:1,
        name:'Eassa',
        review:'essa review',
        ava:AVA1
    },
    {
        id:2,
        name:'mossa',
        review:'mossa review',
        ava:AVA2
    },
    {
        id:3,
        name:'noura',
        review:'noura review',
        ava:AVA3
    },
    {
        id:4,
        name:'meme',
        review:'meme review',
        ava:AVA4
    },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials__container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
          {
            data.map(({id,name,review,ava})=>{
                return(
                    <SwiperSlide key={id} className="testimonial">
                    <div className="client__avatar">
                        <img src={ava} alt="" />
                    
    
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                       {review} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         At nihil asperiores nesciunt pariatur magni quo ipsa,
                          voluptatem cum vero eveniet beatae minima unde, inventore earum velit itaque atque dolore tenetur.
                    </small>
                </SwiperSlide>
                )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials