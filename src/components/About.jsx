import React from "react";
import Img1 from "../assets/assets/blob vector.png"
function About() {
  return (
    <div
      id="aboutus"
      className="w-full h-auto px-20  mb-20  p-12 text-justify"
    >
      <h2 className="text-black text-4xl md:text-6xl text-center m-10 font-sans font-semibold">
        About Us
      </h2>

      <div className="skill-container-right">
        <img src={Img1} className="blob-style" alt="" />
      </div>

      <p className="text-gray-800 text-2xl md:text-3xl font-sans">
        Financial SketchersTM is a Boutique Wealth Advisory Firm having its
        footprint in India, UAE, Singapore, Kenya, UK and Hong Kong. We work
        directly with our clients for catering to their specific needs for
        investment, growth and cash flow over a period of time. The highly
        experienced Investment Consultants at Financial Sketchers are able to
        create a unique portfolio for the client by rendering customised
        solutions on the plank of assurance and growth. Financial SketchersTM
        (India) registered under Insurance Regulatory Development Authority
        comprises of a team of experienced and certified advisors. The company
        has over 20 years of diverse experience in Wealth Management and
        managing investment portfolio for their clients in domestic and
        international space. We prefer and are happy to provide door step
        service to our clients to build trust and long term relationship. We are
        based out of the most Iconic World Trade Tower, Noida and have our team
        located at mentioned countries and recently expanded our presence to
        United Kingdom. We carve out a neat investment portfolio for
        Individuals/Investment to spreads across their investments in the stated
        countries. We are primarily offering Collaborative Portfolio in Life
        Insurance, General Insurance & Health Insurance as well as Mutual Fund
        advise to individuals and Big Corporate houses both.
      </p>
    </div>
  );
}

export default About;
