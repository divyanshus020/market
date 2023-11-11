import React from "react";

function Services() {
  const services = [
    {
      img: "https://www.financialsketchers.com/images/fs/cp.png",
      name: "Collaborative Portfolio",
      text: "We collaborate multiple financial instruments & currencies to get you a high yield portfolio",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/hni1.png",
      name: "HNI Exclusive",
      text: " We work extensively for HNI’s and Super HNI’s Indians or NRI’s with our personal wealth advising",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/me.png",
      name: "Merging Economies",
      text: "We could merge multiple economies across the globe to bring you a comprehensive financial solution",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/rs.png",
      name: "Retire Safely",
      text: "We plan for a sound and a high on rich lifestyle retirement for you",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/sp.png",
      name: "Shield & Protect",
      text: "We shield you and your family with absolute safeguarding strategies",
    },
    {
      img: "https://www.financialsketchers.com/images/fs/wb.png",
      name: "Wealth Builder",
      text: "We create overall wealth for you and your family over time.",
    },
  ];
  return (
    <div className=" my-40 w-screen grid place-items-center">
      <div className=" w-3/4 grid grid-cols-3 gap-16">
        {services.map((service) => (
          <div
            className="text-center flex flex-col items-center justify-center "
            key={service.name}
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-[100px] mb-4"
            />
            <h3 className="text-2xl text-gray-600">{service.name}</h3>
            <p className="text-xl">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
