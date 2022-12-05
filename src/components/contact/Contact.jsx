import React from 'react'
import './contact.css'
import {CiMail, CiPhone} from 'react-icons/ci'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v4fym6q', 'template_jvultwe', form.current, 'CSvWbF9ii__-ApI6T')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <CiMail/>
            <h4>Email</h4>
            <h5 className='email'>marwansummakieh97@gmail.com</h5>
            <a href='mailto:marwansummakieh97@gmail.com' target={'noopene'}>Send an email</a>
          </article>
          <article className="contact_option">
            <CiPhone/>
            <h4>Phone</h4>
            <h5>+45 26 82 26 98</h5>
            <a href='tel:+4526822698' target={'noopene'}>Call me</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine/>
            <h4>messenger</h4>
            <h5>Marwan M Summakieh</h5>
            <a href='https://m.me/marwan.summakieh/' target={'noopene'}>Send me a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-priamry'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
