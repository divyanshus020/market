import React, { useState } from "react";

function Card() {
  const properties = [
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "34343234",
      type: "available",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "344353445",
      type: "available",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "funded",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "3500000",
      type: "funded",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/142/images/2253/1000px_main_U6amSsidEegCrnrfqVXsBEK9u8kL8ebTHjdBXFly.jpeg",
      text: "1 Bed in Rahaal 1, Madinat Jumeirah Living",
      amount: "3500000",
      type: "",
    },
    {
      img: "https://stake-dev-env.s3.eu-west-1.amazonaws.com/properties/140/images/2223/1665px_main_9ZpIeNrlJ45rlx290iU6Sa0hw7JHRu0eJOekTpKb.jpeg",
      text: "4 Bed Townhouse in Elan, Tilal Al Ghaf",
      amount: "3500000",
      type: "",
    },
    {
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
    <div>
      <div>
        <button
          className="text-3xl mx-4"
          onClick={() => {
            filterCard("available");
          }}
        >
          Available
        </button>
        <button
          className="text-3xl mx-4"
          onClick={() => {
            filterCard("funded");
          }}
        >
          funded
        </button>
      </div>
      <div className=" grid grid-cols-1 place-content-center lg:grid-cols-3 md:grid-cols-2">
        {item.map((property) => (
          <div className=" m-8 w-[400px] bg-gray-200 rounded-2xl pb-4">
            <div className="">
              <img
                src={property.img}
                className="rounded-t-md w-[400px] h-[200px]  "
              />
            </div>
            <div className="m-4">
              <h2 className="text-2xl font-bold">{property.text}</h2>
              <p className="text-xl text-cyan-600">{property.amount} RS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
