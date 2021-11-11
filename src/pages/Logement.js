import { Component } from "react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Collapse from "../components/Collapse";
import grey from "../assets/starGrey.svg";
import red from "../assets/starRed.svg";

import axios from "axios";

class Logement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logementData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/logements.json")
      .then((res) => this.setState({ logementData: res.data }));
  }

  render() {
    const { id } = this.props.match.params;

    const { logementData } = this.state;
    let index = logementData.findIndex((log) => log.id === id);
    let logement = logementData[index];
    if (!logement) {
      return null;
    } else {
      const {
        title,
        host,
        location,
        description,
        equipments,
        tags,
        pictures,
        rating,
      } = logement;

      const star = 5;
      let starArray = [];
      for (let i = 0; i < star; i++) {
        rating > i
          ? starArray.push(
              <img className="starSvg" src={red} alt="stars red" />
            )
          : starArray.push(
              <img className="starSvg" src={grey} alt="stars grey" />
            );
      }
      return (
        <div>
          <Navigation />
          <Slider pictures={pictures} />
          <main className="collapseMain">
            <div className="flex">
              <div className="contentTitleName">
                <div className="contentTitle">
                  <h1>{title}</h1>
                  <h2>{location}</h2>
                </div>

                <div className="contentName">
                  <p>{host.name}</p>
                  <img src={host.picture} alt={host.name} />
                </div>
              </div>
              <div className="contentStarTags">
                <div className="contentTags">
                  {tags.map((tag) => (
                    <div className="tags">{tag}</div>
                  ))}
                </div>
                <div className="star">
                  <span>{starArray}</span>
                </div>
              </div>
            </div>
            <section className="sectionCollapse">
              <article className="collapseArticle">
                <Collapse classname="collapseLogement" label="Description">
                  <p>{description}</p>
                </Collapse>
              </article>
              <article className="collapseArticle">
                <Collapse label="Equipement">
                  <ul>
                    {equipments.map((equipment) => (
                      <li key={equipment}>{equipment}</li>
                    ))}
                  </ul>
                </Collapse>
              </article>
            </section>
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default Logement;
