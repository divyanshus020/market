import React, { useState } from "react";
import Button from "./button";

const ImageSlider = () => {
  return (
    <section id="hero-section" className="py-5" data-aos="fade-up">
      <div className="conatiner-defualt">
        <div>
          <div className="">
            <div id="BoxWrapper">
              <div class="text-flow ml-8 animated-text">
                <span className="text-[#3a41bd] text-[40px] text-bold tracking-widest">
                STAKONER
                </span>
                <h1 class="animated-text text-bold">
                  Alternative Investment Opportunity Marketplace for Retail Investors.
                </h1>
                <p className=" text-[#fff] text-3xl tracking-widest mt-4 italic">
                  Create Long term wealth by becoming Angel Investor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
