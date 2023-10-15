import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import ProductCategories from "./ProductCategories";
import Review from "./Review";
import Faq from "./Faq";
import About from "../About/About";
import NewsletterSignup from "./NewsletterSignup";
import ContactUs from "./ContactUs";
import FeaturedArtisans from "./FeaturedArtisans";
import ScrollToTop from "./ScrollToTop";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Banner />
      <FeaturedProducts />
      <ProductCategories />
      <Review />
      <Faq />
      <NewsletterSignup />
      <About />
      <ContactUs />
      {/* <FeaturedArtisans /> */}
      <Footer />
    </div>
  );
};

export default Home;
