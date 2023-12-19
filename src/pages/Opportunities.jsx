import React from "react";
import Card from "../components/Card";
import Slider from "../components/slider";
import { properties } from "../components/properties";
import { useState } from "react";

function Aif() {
  const cardDetails = [
    {
      heading: "Investment in Hotel chain",
      text: " Get long term income up to 20% p.a.and equity directly from the hotel chain",
    },
    {
      heading: "Investment in Cafe chain",
      text: "Get long term income up to 20% p.a.and equity directly from the cafe chain",
    },
    {
      heading: "Invoice discounting",
      text: "Get fixed 12 -18% return in short term bill discounting",
    },
    {
      heading: "Corporate Debt",
      text: "Get fixed 12 -18% return in short term bill corporate bonds",
    },
    {
      heading: "-Other Investment Products.",
      text: "Enquire for best suitable Insurance &amp; Mutual funds available with us",
    },
  ];
  const [item, setItem] = useState(cardDetails);
  // const filterCard = (value) => {
  //   const filterValue = properties.filter((prop) => {
  //     return prop.type == value;
  //   });
  //   setItem(filterValue);
  // };
  return (
    <>
      <Slider />
      <div className="flex justify-center my-20 gap-4 ">
        <div className="">
          <select className="w-60 h-16 text-2xl">
            <option>All</option>
            <option>Venture Debt</option>
            <option>Bill Discounting</option>
            <option>Corporate Debt</option>
            <option>Asset Backed Investment</option>
            <option>Insurance Lead</option>
          </select>
        </div>
        {/* <div className="flex justify-around bg-white w-[30%] h-20 rounded-full cursor-pointer switch_1">
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
        </div> */}
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
