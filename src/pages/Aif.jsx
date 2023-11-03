import React from "react";
import Card from "../components/Card";
import Slider from "../components/slider";
import { properties } from "../components/properties";
import { useState } from "react";

function Aif() {
  const [item, setItem] = useState(properties);
  const filterCard = (value) => {
    const filterValue = properties.filter((prop) => {
      return prop.type == value;
    });
    setItem(filterValue);
  };
  return (
    <>
      <Slider />
      <div className="flex justify-center my-20 gap-4 ">
        <div className="flex justify-around bg-white w-[30%] h-20 rounded-full cursor-pointer switch_1">
          <button
            className="text-3xl mx-4 hover:bg-[#41ce8e] rounded-full w-[30%]"
            onClick={() => {
              filterCard("available");
            }}
          >
            Available
          </button>
          <button
            className="text-3xl mx-4 hover:bg-[#41ce8e] w-[30%] rounded-full"
            onClick={() => {
              filterCard("funded");
            }}
          >
            funded
          </button>
        </div>
      </div>
      <div className="grid justify-center" data-aos="fade-up">
        <div className=" grid grid-cols-1 place-content-center  lg:grid-cols-3 md:grid-cols-2 cards_1">
          {item.map((property) => (
            <Card property={property} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Aif;
