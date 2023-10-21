import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import BestSeller from "../../components/bestSeller/BestSeller";
import Banner from "../../components/banner/Banner";
import banner_img_1 from "../../assets/banner-1.jpg";
import banner_img_2 from "../../assets/banner-2.jpg";
import banner_img_3 from "../../assets/banner-3.jpeg";

const Home = () => {
  return (
    <div className="home pineapples">
      <Hero />
      <BestSeller category="men" />
      <Banner
        banner_img={banner_img_1}
        banner_title={"Exclusive Offers For You"}
        banner_button={"Shop Outlet"}
        link_to={"/outlet"}
      />
      <BestSeller category="women" />
      <BestSeller category="accessories" />
      <Banner
        banner_img={banner_img_2}
        banner_title={"Shop Our Endless Summer Collection"}
        banner_button={"Shop Men"}
        link_to={"/men"}
      />{" "}
      <BestSeller category="kids" />
      <Banner
        banner_img={banner_img_3}
        banner_title={"Find Your Perfect Autum Campfire Outfit"}
        banner_button={"Shop Now"}
        link_to={"/men"}
      />{" "}
    </div>
  );
};

export default Home;
