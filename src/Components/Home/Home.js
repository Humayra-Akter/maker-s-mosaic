import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import About from "../About/About";
import Review from "./Review";
import Faq from "./Faq";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Review />
      <Faq />
      <About />
    </div>
  );
};

export default Home;
