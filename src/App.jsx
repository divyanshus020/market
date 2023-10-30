import React from "react";
import Navbar from "./components/navbar.jsx";
import ImageSlider from "./components/slider.jsx";

import Insure from "./components/insure.jsx";
import PartnerSlider from "./components/partnerSlider.jsx";
import UserReviews from "./components/userReviews.jsx";
import CompanyLogo from "./components/companyLogo.jsx";
function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Insure />
      <PartnerSlider />
      <UserReviews />
      <CompanyLogo />
    </>
  );
}
export default App;
