import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import './header.css'
function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/marwan-summakieh-07a061171' target='_blank' rel='noreferrer'><BsLinkedin/></a>
      <a href='https://github.com/MarwanSummakieh' target='_blank' rel='noreferrer'><FaGithub/></a>
      <a href='https://twitter.com/MSummakieh' target='_blank' rel='noreferrer'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials
