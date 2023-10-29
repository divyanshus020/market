import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1661353245572-5e41f6208de8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpZGVyfGVufDB8fDB8fHww",
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
    <div className="w-full">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
