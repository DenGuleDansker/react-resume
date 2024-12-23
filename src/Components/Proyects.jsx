import React from "react";
import { Description } from "./Description";

export const Proyects = ({ proyects }) => {
  return (
    <section className="proyects-experience section" id="proyects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {proyects.map((proyect) => (
          <Proyect key={proyect.company} {...proyect} />
        ))}
      </div>
    </section>
  );
};

const Proyect = ({
  name,
  company,
  period,
  description,
  label,
  url,
  siteurl,
  sitelabel,
  siteclassName,
  className,
}) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">
          {name} - {company}
        </h3>
        <span className="experience__proyect">{period}</span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
        <a href={url} target="_blank" rel="noreferrer" className="social__link">
          <i className={`bx ${className} social__icon`}></i> {label}
        </a>
        <a href={siteurl} target="_blank" rel="noreferrer" className="social__link">
          <i className={`bx ${siteclassName} social__icon`}></i> {sitelabel}
        </a>
      </div>
    </div>
  );
};
