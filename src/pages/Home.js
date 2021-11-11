import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
