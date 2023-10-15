import React from "react";
import banner6 from "../../images/banner/banner-8.jpg";
import banner1 from "../../images/artPrints/6.jpg";
import banner3 from "../../images/homeDecor/5.jpg";

const About = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center text-primary my-8">
        About - "Maker's Mosaic"
      </h1>
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        <div
          style={{
            background: `url(${banner6})`,
            backgroundSize: "cover",
          }}
          className="bg-accent rounded-lg p-6 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-sm font-semibold text-justify text-primary">
            To bridge artisans and discerning buyers seeking exceptional
            handcrafted goods. We're committed to preserving and promoting
            traditional craftsmanship and nurturing a global community that
            values artistry and authenticity.
          </p>
          <h2 className="text-xl font-bold text-black mb-4">
            Global & Local Impact
          </h2>
          <p className="text-sm font-semibold text-primary text-justify">
            We understand the importance of both local and global impact. We
            celebrate local artisans and their culture while creating a global
            marketplace for handcrafted treasures, connecting the world through
            artistry.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner3})`,
              backgroundSize: "cover",
            }}
            className="bg-accent rounded-lg p-6 hover:scale-105 hover:bg-secondary hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-neutral mb-4">
              Quality & Authenticity
            </h2>
            <p className="text-sm font-semibold text-accent text-justify">
              We curate a collection of handcrafted products that epitomize
              quality and authenticity. Each item is carefully selected,
              representing the very essence of craftsmanship.
            </p>
          </div>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner1})`,
              backgroundSize: "cover",
            }}
            className="bg-accent rounded-lg p-6 hover:scale-105 hover:bg-secondary hover:shadow-2xl"
          >
            <h2 className="text-xl font-bold text-neutral mb-4">Our Vision</h2>
            <p className="text-sm font-semibold text-accent text-justify">
              To be a beacon of craftsmanship, a trusted platform for artisans,
              and a source of inspiration for all lovers of handcrafted beauty.
              We provide an unparalleled shopping experience founded on quality,
              authenticity, and the celebration of human creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
