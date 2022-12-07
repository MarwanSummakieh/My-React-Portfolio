import React from "react";
import "./about.css";
import Marwan from "../../assets/Marwan.jpg";
import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={Marwan} alt="ColorMe" className="about_me_image" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <IoSchoolOutline className="about_icon" />
              <h5>School</h5>
              <small>Via University Collage</small>
            </article>
            <article className="about_card">
              <AiOutlineProject className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className="about_card">
              <TbCertificate className="about_icon" />
              <h5>Certificate</h5>
              <small>Coursera certified</small>
            </article>
          </div>
          <p>
            As of the the summer of 2022 I am officially a software engineer. I
            have built several projects throughout my studies and independent
            courses. right now I am focoused on front-end development and cloud
            computing with Azure
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
