import React from "react";
import CTA from "./CTA";
import Marwan from "../../assets/Marwan.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
function Header() {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hi I am</h5>
        <h1>Marwan Summakieh</h1>
        <h5 className="text-light">Software engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Marwan} alt="me" className="me_img"/>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
