import React, { useState, useEffect } from "react";
import banner1 from "../../images/banner/1.jpg";
import banner2 from "../../images/banner/2.jpg";
import banner3 from "../../images/banner/3.jpg";
import banner4 from "../../images/banner/4.jpg";
const images = [banner1, banner2, banner3, banner4];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[66vh]">
      <div className="absolute inset-0 transition-opacity duration-1000">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 opacity-${
              index === currentIndex ? 100 : 0
            } transition-opacity duration-1000`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div
        style={{ fontFamily: "rockwell" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-shadow">
          Every Piece Tells a Story
        </h1>
        <h2 className="text-2xl text-shadow">Discover Handcrafted Art</h2>
      </div>
    </div>
  );
};

export default Banner;
