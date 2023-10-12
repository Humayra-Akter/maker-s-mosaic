import React from "react";
import banner6 from "../../images/banner/banner-8.jpg";
import banner1 from "../../images/artPrints/6.jpg";
import banner2 from "../../images/candlesSoaps/2.jpg";
import banner3 from "../../images/homeDecor/5.jpg";

const About = () => {
  return (
    <div
      className="mt-24"
      //   style={{
      //     background: `url(${banner6})`,
      //     backgroundSize: "cover",
      //   }}
    >
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-4xl font-bold text-center text-primary py-10"
      >
        About - "Maker's Mosaic"
      </h1>
      <div className="grid lg:grid-cols-4 gap-10 py-5 px-10">
        <div>
          <img
            className="w-full h-60 rounded-xl hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
            src={banner3}
            alt=""
          />
        </div>
        <div
          className="p-5 rounded-lg hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
          style={{
            background: `url(${banner6})`,
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{ fontFamily: "rockwell" }}
            className="text-xl font-bold text-center text-black pb-4"
          >
            Our Mission
          </h1>
          <p
            style={{ fontFamily: "rockwell" }}
            className="font-semibold text-xs text-justify text-primary"
          >
            Our mission is to be the bridge that unites artisans and discerning
            buyers seeking exceptional handcrafted goods. We are committed to
            preserving and promoting traditional craftsmanship, recognizing that
            each handcrafted piece carries a piece of the creator's spirit. We
            aim to nurture a global community that values artistry and
            authenticity.
          </p>
        </div>
        <div
          className="p-5 rounded-lg hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
          style={{
            background: `url(${banner6})`,
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{ fontFamily: "rockwell" }}
            className="text-xl font-bold text-center text-black pb-4"
          >
            Quality and Authenticity
          </h1>
          <p
            style={{ fontFamily: "rockwell" }}
            className="font-semibold text-xs text-justify text-primary"
          >
            We take pride in curating a collection of handcrafted products that
            epitomize quality and authenticity. Each item is carefully selected,
            representing the very essence of craftsmanship. Quality control and
            sourcing are at the heart of our commitment to excellence.
          </p>
        </div>
        <div
          className="p-5 rounded-lg hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
          style={{
            background: `url(${banner6})`,
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{ fontFamily: "rockwell" }}
            className="text-xl font-bold text-center text-black pb-4"
          >
            Our Vision
          </h1>
          <p
            style={{ fontFamily: "rockwell" }}
            className="font-semibold text-xs text-justify text-primary"
          >
            Our vision for the future is to continue being a beacon of
            craftsmanship, a trusted platform for artisans, and a source of
            inspiration for all lovers of handcrafted beauty. We're here to
            provide you with an unparalleled shopping experience that is founded
            on quality, authenticity, and the celebration of human creativity.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 px-10">
        <div
          className="p-5 rounded-lg hover:scale-105 hover:bg-secondary hover:shadow-2xl"
          style={{
            background: `url(${banner6})`,
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{ fontFamily: "rockwell" }}
            className="text-xl font-bold text-center text-black pb-4"
          >
            Global or Local Impact
          </h1>
          <p
            style={{ fontFamily: "rockwell" }}
            className="font-semibold text-xs text-justify text-primary"
          >
            We understand the importance of both local and global impact. While
            we celebrate local artisans and their culture, we also strive to
            create a global marketplace for handcrafted treasures. Our aim is to
            connect the world through artistry.
          </p>
        </div>
        <div className="flex gap-5">
          <img
            className="w-full h-40 rounded-xl hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
            src={banner1}
            alt=""
          />
          <img
            className="w-full h-40 rounded-xl hover:scale-105 hover:bg-secondary  hover:shadow-2xl"
            src={banner2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
