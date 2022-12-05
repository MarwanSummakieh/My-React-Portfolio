import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin, BsFacebook, BsTwitter} from 'react-icons/bs'
import {SiCoursera} from 'react-icons/si'
function Footer() {
  return (
    <footer>
      <div className='socials'>
        <a href='https://github.com/MarwanSummakieh' target={'noopener'} className='icons'><BsGithub/> Github</a>
        <a href='https://www.linkedin.com/in/marwan-summakieh-07a061171/' target={'noopener'} className='icons'><BsLinkedin/> Linkin</a>
        <a href='https://www.facebook.com/marwan.summakieh/' target={'noopener'} className='icons'><BsFacebook/> Facebook</a>
        <a href='https://twitter.com/MSummakieh' target={'noopener'} className='icons'><BsTwitter/> Twitter</a>
        <a href='https://www.coursera.org/user/1ff1f111d29adeece918c0a4615f2396' target={'noopener'} className='icons'><SiCoursera/> Coursera</a>
      </div>
    </footer>
  )
}

export default Footer
