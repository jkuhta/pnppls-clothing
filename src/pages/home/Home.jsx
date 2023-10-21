import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import BestSeller from "../../components/bestSeller/BestSeller";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="home pineapples">
      <Hero />
      <BestSeller category="men" />
      <Banner />
      <BestSeller category="women" />
      <BestSeller category="accessories" />

      <Banner />
      <BestSeller category="kids" />

      <Banner />
    </div>
  );
};

export default Home;
