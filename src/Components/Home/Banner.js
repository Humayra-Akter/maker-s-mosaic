import React from "react";
import banner6 from "../../images/banner/banner7.png";

const Banner = () => {
  return (
    <div
      className="h-52"
      style={{
        background: `url(${banner6})`,
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-4xl font-bold text-center text-primary pt-20"
      >
        Every Piece Tells a Story
        <br />
        Discover Handcrafted Art
      </h1>
    </div>
  );
};

export default Banner;
