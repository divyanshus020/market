import React from "react";

function ProductLogo() {
  const products = [
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
    {
      img: "https://finizon.com/media/admin/verticalProducts/InsureFit_360_GOQii.png",
      name: "Insure Fit 360",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/Shopkeeper.png",
      name: "Shopkeeper Insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/unit_link_insurance-img10_qSGO2cz.svg",
      name: "Savings & Insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/unit_link_insurance-img10_qSGO2cz.svg",
      name: "Savings & Insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/unit_link_insurance-img10_qSGO2cz.svg",
      name: "Savings & Insurence",
    },
    {
      img: "https://finizon.com/media/admin/verticalProducts/unit_link_insurance-img10_qSGO2cz.svg",
      name: "Savings & Insurence",
    },
  ];
  return (
    <div className=" pb-20 w-3/4 grid grid-cols-4 gap-8 product_1" id="landing_1"  data-aos="fade-up">
      {products.map((product) => (
        <div
          className="text-[16px] text-center w-50 h-40 m-8 flex flex-col items-center justify-center "
          key={product.name}
        >
          <img src={product.img} alt={product.name} className="w-1/2 mb-4" />
          <h3 className="text-2xl text-gray-600">{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductLogo;
