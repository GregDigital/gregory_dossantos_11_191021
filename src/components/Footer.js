import React from "react";
import Logofooter from "../assets/logo-white.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img className="footerImg" src={Logofooter} alt="logo-footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
