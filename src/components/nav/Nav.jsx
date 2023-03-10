import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'




const Nav = () => {

    
  return (
    <nav>
        <a href="#" ><AiOutlineHome/></a>
        <a href="#about"><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><RiServiceLine/></a>
        <a href="#contact"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Nav