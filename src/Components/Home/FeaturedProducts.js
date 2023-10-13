import React from "react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../images/banner/1.jpg";
import banner2 from "../../images/banner/2.jpg";
import banner3 from "../../images/banner/7.jpg";
import banner4 from "../../images/banner/4.jpg";
import banner5 from "../../images/banner/5.jpg";
import banner6 from "../../images/banner/7.jpg";

const FeaturedProducts = () => {
  return (
    <div>
      {" "}
      <h1
        style={{ fontFamily: "rockwell" }}
        className="text-2xl font-bold text-center text-primary mt-16"
      >
        Featured Products
      </h1>
      <Swiper
        className="mt-7 bg-accent "
        spaceBetween={16}
        slidesPerView={4.5}
        autoplay={true}
        loop={true}
      >
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner1} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Art Prints
          </h1>{" "}
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner2} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Home Decor
          </h1>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner3} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Pottery Ceramics
          </h1>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner4} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Textiles
          </h1>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner5} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Glasswork
          </h1>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner6} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Accessories
          </h1>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-110 hover:bg-secondary  hover:shadow-2xl">
          <img className="w-full h-48 p-2" src={banner4} alt="" />
          <h1 className="text-xl hover:text-accent font-bold text-center text-primary pt-2">
            Handcraft
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
