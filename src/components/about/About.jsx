import React from 'react'
import './about.css';
import ME from '../../assest/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image' >
                    <img src={ME} alt="About Me" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                  <article className='about__card'>
                    <FaAward className='about__icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years Working Experience</small>
                    </article>

                    <article className='about__card'>
                    <FiUsers className='about__icon'/>
                    <h5>Clients</h5>
                    <small>100+ Worldwide</small>
                    </article>

                    <article className='about__card'>
                    <VscFolderLibrary className='about__icon'/>
                    <h5>Projects</h5>
                    <small>30+ Completed</small>
                    </article>  
                </div>
                <div>
                <p>
                I hold a degree in informatics engineering, specializing in software engineering I work in many fields as a freelancer But I have a lot of experience and work in interactive web applications, and I have worked on many framework
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About