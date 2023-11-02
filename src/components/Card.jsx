import React, { useState } from "react";
import { Link } from "react-router-dom";
function Card() {
  const properties = [
    {
      id: 1,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "34343234",
      type: "available",
    },
    {
      id: 2,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "344353445",
      type: "available",
    },
    {
      id: 3,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "funded",
    },
    {
      id: 4,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "3500000",
      type: "funded",
    },
    {
      id: 5,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "",
    },
    {
      id: 7,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "3500000",
      type: "",
    },
    {
      id: 8,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "",
    },
    {
      id: 9,
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "3500000",
      type: "",
    },
  ];
  const [item, setItem] = useState(properties);
  const filterCard = (value) => {
    const filterValue = properties.filter((prop) => {
      return prop.type == value;
    });
    setItem(filterValue);
  };
  return (
    <div data-aos="fade-up" className="">
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
            <div className=" m-8 w-[350px] bg-gray-200 rounded-2xl pb-4  transition duration-500 hover:scale-90">
              <div className="">
                <img
                  src={property.img}
                  className="rounded-t-md w-[400px] h-[200px]  "
                />
              </div>
              <div className="m-4">
                <Link to={`/aif/${property.id}`}>
                  <h2 className="text-2xl font-bold">{property.text}</h2>
                </Link>
                <p className="text-xl text-cyan-600">{property.amount} RS</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
