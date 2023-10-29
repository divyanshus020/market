import React from "react";
import Navbar from "./components/navbar.jsx";
import ImageSlider from "./components/slider.jsx";

import Insure from "./components/insure.jsx";
import PartnerSlider from "./components/partnerSlider.jsx";
function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Insure />
      <PartnerSlider />
    </>
  );
}
export default App;
