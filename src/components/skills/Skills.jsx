import React from "react";
import "./skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandVue } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import { DiJava } from "react-icons/di";
import { SiDotnet, SiMicrosoftazure } from "react-icons/si";
import { SiMicrosoftsqlserver, SiPostgresql, SiUnity, SiAmazonaws} from "react-icons/si";

function Skills() {
  return (
    <section id="skills">
      <h5>Skills I have</h5>
      <div className="container skills_container">
        <div className="skills_front_end">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="exp_details">
              <AiOutlineHtml5 className="exp_details_icon"/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="exp_details">
              <DiCss3Full className="exp_details_icon"/>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="exp_details">
              <TbBrandTailwind className="exp_details_icon"/>
              <h4>Tailwind CSS</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="exp_details">
              <DiReact className="exp_details_icon"/>
              <h4>React.JS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="exp_details">
              <TbBrandReactNative className="exp_details_icon"/>
              <h4>React-native</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="exp_details">
              <TbBrandVue className="exp_details_icon"/>
              <h4>Vue.JS</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="exp_details">
              <SiUnity className="exp_details_icon"/>
              <h4>Unity</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>

        <div className="skills_back_end">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="exp_details">
              <GrNode className="exp_details_icon"/>
              <h4>Node.JS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="exp_details">
              <DiJava className="exp_details_icon"/>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="exp_details">
              <SiDotnet className="exp_details_icon"/>
              <h4>.Net C#</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="exp_details">
              <SiMicrosoftsqlserver className="exp_details_icon"/>
              <h4>MSSQL</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="exp_details">
              <SiPostgresql className="exp_details_icon"/>
              <h4>PostgresSQL</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="exp_details">
              <SiMicrosoftazure className="exp_details_icon"/>
              <h4>Azure Cloud</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="exp_details">
              <SiAmazonaws className="exp_details_icon"/>
              <h4>Amazon Web Services</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
