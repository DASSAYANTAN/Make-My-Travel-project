import React from "react";
import Slider from "./sliders/Slider";
import Styles from "../pages/_pages.module.css";
import SearchHotel from "../components/hotelsandCity/SearchHotel";

const Home = () => {
  return <section id={Styles.pagesBlock}>
    <article>
      <Slider />
      <SearchHotel/>
    </article>
  </section>;
};

export default Home;
