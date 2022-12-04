import React from 'react'
import MarwanResume from '../../assets/MarwanResume.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={MarwanResume} download className='btn'>Download my CV</a>
        <a href='#contact' className='btn btn-primary'>Get in touch</a>
    </div>
  )
}

export default CTA