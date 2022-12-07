import React, { useEffect, useState } from "react";
import "./portfolio.css";
function Portfolio() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const reposURl = `https://api.github.com/users/MarwanSummakieh/repos`;
    const getRepos = async () => {
      const response = await fetch(reposURl);
      const repos = await response.json();
      setRepos(repos);
    };
    getRepos();
  }, []);

  return (
    <section id="portfolio">
      <h5>Some of my work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        {repos.map((repo) => {
          return (
            <section id={repo.id}>
              <div className="portfolio_item">
                <h5 className="name">{repo.name}</h5>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary">github link</button>
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
