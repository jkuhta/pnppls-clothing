import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import BestSeller from "../../components/bestSeller/BestSeller";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <BestSeller category="men" />
      <Banner />
      <BestSeller category="women" />
      <BestSeller category="accessories" />
    </div>
  );
};

export default Home;
