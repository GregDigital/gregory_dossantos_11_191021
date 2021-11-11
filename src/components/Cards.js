import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  const { logement } = props;
  return (
    <NavLink exact to={`/logement/${logement.id}`} activeClassName="logement">
      <img
        className="imgCard"
        src={logement.cover}
        alt={logement.title}
        loading="lazy"
      />
      <h2 className="titleCard">{logement.title}</h2>
    </NavLink>
  );
};

export default Cards;

/*<section className="sectionCards">
      <article className="aptCard">
        <NavLink exact to="/" activeClassName="nav-active">
          <img className="" alt="" />
        </NavLink>
      </article>
    </section>*/
