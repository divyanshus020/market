import React from "react";
import universal_logo from "../assets/assets/universal_logo.png";
import tata_aia_logo from "../assets/assets/tata_aia_logo.png";
import shriram_capital_logo from "../assets/assets/shriram_capital_logo.png";
import religare_logo from "../assets/assets/religare_logo.png";
import Reliance from "../assets/assets/Reliance.png";
import max_life from "../assets/assets/max_life.png";
import icici_pru_logo from "../assets/assets/icici_pru_logo.png";
import icici_lombard_logo from "../assets/assets/icici_lombard_logo.png";
import hdfc_ergo from "../assets/assets/hdfc_ergo.png";
import hdfc from "../assets/assets/hdfc.png";
import Care_health_insurance_logo from "../assets/assets/Care_health_insurance_logo.png";
import digit_logo from "../assets/assets/digit_logo.png";
import bajaj_logo from "../assets/assets/bajaj_logo.png";

function CompanyLogo() {
  const logos = [
    icici_lombard_logo,
    max_life,
    digit_logo,
    bajaj_logo,
    universal_logo,
    tata_aia_logo,
    hdfc_ergo,
    icici_pru_logo,
    Care_health_insurance_logo,
    shriram_capital_logo,
    religare_logo,
    Reliance,
  ];
  return (
    <div className=" w-full flex justify-center mt-40">
      <div className="w-3/4 grid grid-cols-4 gap-8">
        {logos.map((logo) => (
          <img
            src={logo}
            alt="logo"
            className="aspect-[3/2] object-contain w-80"
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyLogo;
