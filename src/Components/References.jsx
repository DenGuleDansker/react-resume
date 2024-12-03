import React from "react";

export const References = ({ label, name, position, mail }) => (
  <section className="references section" id="references">
    <h2 className="section-title">{label}</h2>
    <p className="profile__description">{name}</p>
    <p className="profile__description">{position}</p>
    <p className="profile__description">{mail}</p>
  </section>
);
