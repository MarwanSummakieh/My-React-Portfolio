import React from 'react'
import './navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {TbTools} from 'react-icons/tb'
import {TbMessage2} from 'react-icons/tb'
import { useState } from 'react'

function Navigation() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href='#about'onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FiUser/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active':''}><TbTools/></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}><AiOutlineFundProjectionScreen/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><TbMessage2/></a>
    </nav>
  )
}

export default Navigation
