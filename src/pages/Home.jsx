import React from "react";
import ImageSlider from "../components/slider";
import PartnerSlider from "../components/partnerSlider";
import UserReviews from "../components/userReviews";
import CompanyLogo from "../components/companyLogo";
import ProductLogo from "../components/ProductLogo";
import Why from "../components/why"

function Home() {
  return (
    <div>
      <ImageSlider />
      <div className="landing_page  w-full mt-20 flex justify-center items-center">
        <ProductLogo />
      </div>
      <Why/>
      <PartnerSlider />
      <UserReviews />
      <CompanyLogo />
    </div>
  );
}

export default Home;
