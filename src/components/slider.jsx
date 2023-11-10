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
    <section id="hero-section" className="py-5" data-aos="fade-up">
      <div className="conatiner-defualt">
        <div>
          <div className="">
            <div id="BoxWrapper">
              <div class="text-flow">
                <h1 class="animated-text">We invest in the companies of tomorrow, today <span className="text-[#fb923c]">MARKET MAGNET</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
