import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ax = axios.create({
      baseURL: "http://localhost:3000",
    });
    ax.get("logements.json").then((res) => setData(res.data));
  }, []);
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
};

export default Main;
