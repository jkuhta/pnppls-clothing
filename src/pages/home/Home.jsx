import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import BestSeller from "../../components/bestSeller/BestSeller";
import Banner from "../../components/banner/Banner";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <BestSeller category="men" />
      <Banner />
      <BestSeller category="women" />
      <BestSeller category="accessories" />

      <Banner />

      <Newsletter />
    </div>
  );
};

export default Home;
