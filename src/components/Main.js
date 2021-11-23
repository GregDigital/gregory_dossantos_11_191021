import React from "react";
import axios from "axios";
import Cards from "./Cards";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/logements.json")
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    const { data } = this.state;

    return (
      <main className="main">
        <section className="sectionCards">
          {data.map((logement) => (
            <article key={logement.id} className="aptCard">
              <Cards logement={logement} key={logement.name} />
            </article>
          ))}
        </section>
      </main>
    );
  }
}

export default Main;
