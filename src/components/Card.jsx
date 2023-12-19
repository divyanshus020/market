import React, { useState } from "react";
import { Link } from "react-router-dom";
function Card({ property }) {
  return (
    <div data-aos="fade-up" className="">
      <div className=" m-8 w-[350px] bg-gray-200 rounded-2xl pb-4  transition duration-500 hover:scale-90">
        {/* <div className="">
          <img
            src={property.img}
            className="rounded-t-md w-[400px] h-[200px]  "
          />
        </div> */}
        <div className="m-4">
          <h2 className="text-2xl font-bold">{property.heading}</h2>

          <p className="text-xl text-cyan-600 ">{property.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
