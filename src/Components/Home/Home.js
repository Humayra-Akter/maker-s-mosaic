import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import About from "../About/About";
import Review from "./Review";
import Faq from "./Faq";
import ScrollToTop from "./ScrollToTop";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Review />
      <Faq />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
