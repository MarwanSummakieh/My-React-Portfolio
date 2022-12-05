import React from "react";
import "./portfolio.css";
import portfolio from "../../assets/portfolio.svg";
import emergencyButton from "../../assets/EmergencyButton.svg";
import artillery from "../../assets/artillery.svg";
import mail from "../../assets/mail.svg";
function Portfolio() {
  const portfolioData = [
    {
      id: 1,
      title: "Portfolio Website",
      about: "This is my portfolio website",
      githubLink: "https://github.com/MarwanSummakieh/portfolioreact",
      image: portfolio,
    },
    {
      id: 2,
      title: "Emergency App",
      about: "My Bacherlor's Degree Project",
      githubLink: "https://github.com/MarwanSummakieh/bpr-app",
      image: emergencyButton,
    },
    {
      id: 3,
      title: "Strategy Game with Unity",
      about: "An attempt to recreate the game Generals",
      githubLink: "https://github.com/MarwanSummakieh/real-time-strategie",
      image: artillery,
    },
    {
      id: 4,
      title: "Mail App",
      about: "Mail app that uses 3-tier architecture",
      githubLink: "https://github.com/MarwanSummakieh/Small-Messaging-App",
      image: mail,
    },
  ];
  return (
    <section id="portfolio">
      <h5>Some of my work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_container">
      {portfolioData.map(({ id, image, title, about, githubLink }) => {
        return (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt="img" />
            </div>
            <h3>{title}</h3>
            <p>{about}</p>
            <a
              href={githubLink}
              className="btn portfolio_item_cta"
              target={"noreferrer"}
            >
              Github Link
            </a>
          </article>
        );
      })}
      </div>
    </section>
  );
}

export default Portfolio;
