import React from "react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../images/banner/fe1.jpg";
import banner2 from "../../images/banner/fe2.jpg";
import banner3 from "../../images/banner/fe3.jpg";
import banner4 from "../../images/banner/fe4.jpg";
import banner5 from "../../images/banner/fe5.jpg";
import banner6 from "../../images/banner/6.jpg";
import banner7 from "../../images/banner/fe7.jpg";

const FeaturedProducts = () => {
  return (
    <div className="text-center py-10 bg-accent">
      <h1 className="text-3xl font-bold text-primary mb-5">
        Featured Products
      </h1>
      <Swiper
        spaceBetween={16}
        slidesPerView={4.5}
        autoplay={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner1} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">Art Prints</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner2} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">Home Decor</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner3} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">
                Bamboo Crafts
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner4} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">
                Pottery Ceramics
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner5} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">Textiles</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner6} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">Candles</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="group relative">
            <img className="w-96 h-56 rounded-lg" src={banner7} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
              {" "}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <h1 className="text-xl font-semibold text-white">Glasswork</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
