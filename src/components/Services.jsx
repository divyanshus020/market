import React from "react";

function Services() {
  const services = [
    {
      img: "https://finizon.com/media/admin/verticalProducts/two_wheeler_insurance-img1_FwtLcqz.svg",
      name: "Two-wheeler insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/car_insurance-img2.svg",
      name: "Car insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/medical_insurance-img3.svg",
      name: "Health insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/hospicash-img4.png",
      name: "Hospicash",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/term_life_insurance-img5.svg",
      name: "Life insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/insureright-img6.png",
      name: "InsureFit 360",
    },
  ];
  return (
    <div
      className=" pb-20 w-3/4 grid grid-cols-3 gap-8 product_1"
      id="landing_1"
      data-aos="fade-up"
    >
      {services.map((service) => (
        <div
          className="text-[16px] text-center w-50 h-40 m-8 flex flex-col items-center justify-center "
          key={service.name}
        >
          <img src={services.img} alt={services.name} className="w-1/2 mb-4" />
          <h3 className="text-2xl text-gray-600">{services.name}</h3>
          <p>{services.details}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
