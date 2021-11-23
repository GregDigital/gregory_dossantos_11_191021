import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <Banner />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
