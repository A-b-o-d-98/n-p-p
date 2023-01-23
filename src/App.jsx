import React from 'react';
import  {default as About}  from './components/about/About';
import Contact from './components/contact/Contact';
import {default as Experience} from './components/experience/Experience';
import {default as Footer} from './components/footer/Footer';
import {default as Header} from './components/header/Header';
import {default as Nav} from './components/nav/Nav';
import {default as Portfolio} from './components/portfolio/Portfolio';
import {default as Services} from './components/services/Services';
import {default as Testimonials} from './components/testimonials/Testimonials';


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App