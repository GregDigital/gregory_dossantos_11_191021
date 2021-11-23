import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <h1 className="notFound">404</h1>
        <p className="notFoundPara">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <ul className="notFoundUl">
          <li>
            <Link to="/">Retourner sur la page d'accueil</Link>
          </li>
        </ul>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
