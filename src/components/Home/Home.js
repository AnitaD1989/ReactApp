import React from "react";
import style from "./Home.module.scss";
import Hero from "../Hero/Hero";
import Lists from "../Lists/Lists";

const Home = () => {
  return (
    <div className={style.home}>
      <Hero />
      <Lists />
    </div>

  );
}

export default Home;

