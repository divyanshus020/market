import React, { useState } from "react";
import Banner1 from "../assets/assets/banner1";

const ImageSlider = () => {
  const images = [
    "<Banner1/>",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex mt-36 mx-20">
      <div className="w-1/2 mt-28">
        <p className="text-7xl font-bold">
          Offer a comprehensive financial solution to your customers{" "}
          <span className="text-cyan-600">
            & drive your business as trusted partner
          </span>
        </p>
        <p className="text-yellow-600 text-5xl my-4">join as partner :</p>
        <button className="bg-yellow-600 p-4 text-white text-2xl rounded-lg">
          come join us
        </button>
      </div>
      <div className="w-1/2">
        <Banner1 />
      </div>
    </div>
  );
};

export default ImageSlider;
