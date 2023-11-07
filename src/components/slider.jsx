import React, { useState } from "react";
import Button from "./button";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="py-5" data-aos="fade-up">
      <div className="container_1 flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className=" mb-14 lg:mb-0 lg:w-2/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-gray-900 font-bold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
            Offer a comprehensive financial
            <span className="text-[#00a0ae]">
              {" "}
              & drive your business as trusted
            </span>
          </h1>

          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md text-[20px]  leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            ducimus? Ad doloribus officia provident laboriosam.
          </p>

          {/* <div className="lg:w-1/2">
          <img src="https://finizon.com/media/admin/banner/insurance_page_banner1.svg" alt="hero-logo" className="ml-auto"/>
      </div> */}

          <div className="flex justify-center mt-14 lg:justify-start">
            <Button text={"Learn More"} />
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="https://finizon.com/media/admin/banner/insurance_page_banner1.svg"
            alt="hero-logo"
            className="ml-auto w-[370px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
