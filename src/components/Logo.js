import React from "react";
import Logoo from "../assets/logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img className="logoImg" src={Logoo} alt="logo" />
      </div>
    );
  }
}

export default Logo;
