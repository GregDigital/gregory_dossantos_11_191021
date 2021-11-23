import React from "react";
import { NavLink } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <NavLink
        exact
        to={`/logement/${this.props.logement.id}`}
        activeClassName="logement"
      >
        <img
          className="imgCard"
          src={this.props.logement.cover}
          alt={this.props.logement.title}
          loading="lazy"
        />
        <h2 className="titleCard">{this.props.logement.title}</h2>
      </NavLink>
    );
  }
}

export default Cards;
