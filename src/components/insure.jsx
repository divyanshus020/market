import React from "react";
import ProductLogo from "./ProductLogo";
import slider from "../components/slider";
function Insure() {
  return (
    // father class wrapper

    <section className="wrapper_1">
      {/* icons */}
      <div className="landing_page  w-full mt-20 flex justify-center items-center">
        {/* first bar */}
        <ProductLogo />
      </div>

      <section id="home" className="py-5"  data-aos="fade-up">
        <div className="container_1 flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row">
          <div className="mb-14 lg:mb-0 lg:w-2/2 w-[500px]">
            <h1 className="text-[40px] text-[#465a65]  font-semibold">
              <span className="underline decoration-[#e27e28]">Insure</span>{" "}
              Right
            </h1>

            <p className="text-[24px] text-[#707070] mb-[35px]">
              Let our proprietary tool suggest<br></br>
              the right coverage for you in under 4 mins
            </p>

            <button className="bg-[#e27e28] hover:bg-blue-700 text-white font-bold py-5 px-12 rounded">
              <h2 className="text-[15px]">Enroll now</h2>
            </button>
          </div>

          <div className="">
            <div className="lg:w-2/2">
              <img
                src="https://finizoninsurance.com/assets/img/protect_right_illustration.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/*second hero section 2  */}

      <section id="home" className="py-5 my-20"  data-aos="fade-up">
        <div className="container_1 flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row">
          <div className=" mb-14 lg:mb-0 lg:w-2/2 w-[500px]">
            <h1 className="max-w-full text-[2.9rem] leading-none text-gray-900 font-bold font-sans text-center lg:text-5xl lg:text-center lg:leading-tight mb-7">
              Compare Insurance across Companies
            </h1>

            <p className="max-w-full text-center text-gray-500 lg:text-center lg:max-w-4xl text-[20px]">
              Be it Life, Motor or Health insurance, compare insurance plans
              across 35+ insurers
            </p>
          </div>

          <div className="lg:w-2/2 why_child">
            <img
              src="https://finizoninsurance.com/assets/img/feature_illustration_1.svg"
              alt="hero-logo"
              className="ml-auto"
            />
          </div>
        </div>
      </section>

      {/* third hero section */}

      <section id="home" className="py-5 my-20" data-aos="fade-up">
        <div className="container_1 flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row">
          <div className="lg:w-2/2">
            <img
              src="https://finizoninsurance.com/assets/img/feature_illustration_2.svg"
              alt="hero-logo"
              className="ml-auto" 
            />
          </div>

          <div className=" mb-14 lg:mb-0 lg:w-2/2 w-[500px]">
            <h1 className="max-w-full text-[2.9rem] leading-none text-gray-900 font-bold font-sans text-center lg:text-5xl lg:text-center lg:leading-tight mb-7">
              Manage all your Policies at One Place
            </h1>

            <p className="max-w-full text-center text-gray-500 lg:text-center lg:max-w-4xl text-[20px]">
              Have all your policies handy in one place when you need them at
              the time of claim; or renewal
            </p>
          </div>
        </div>
      </section>

      {/* fourth hero section */}

      <section id="home" className="py-5 my-20" data-aos="fade-up">
        <div className="container_1 flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row gap-10">
          <div className=" mb-14 lg:mb-0 lg:w-2/2 w-[500px]">
            <h1 className="max-w-full text-[2.9rem] leading-none text-gray-900 font-bold font-sans text-center lg:text-5xl lg:text-center lg:leading-tight mb-7">
              Assistance On-the-Go
            </h1>

            <p className="max-w-full text-center text-gray-500 lg:text-right lg:max-w-4xl text-[20px]">
              The platform gives much more than jst insurance. Use our
              proprietary tools to find the right protection solutions, wellness
              programs, emergency assistance programs etc.
            </p>  
          </div>

          <div className="lg:w-2/2">
            <img
              src="https://finizoninsurance.com/assets/img/feature_illustration_3.svg"
              alt="hero-logo"
              className="ml-auto"
            />
          </div>
        </div>
      </section>

      {/* fifth hero section */}

      <section id="home" className="py-5 my-20" data-aos="fade-up">
        <div className="container_1 flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row">
          <div className="lg:w-2/2">
            <img
              src="https://finizoninsurance.com/assets/img/feature_illustration_4.svg"
              alt="hero-logo"
              className="ml-auto"
            />
          </div>


        

          <div className=" mb-14 lg:mb-0 lg:w-2/2 w-[500px]">
            <h1 className="max-w-full text-[2.9rem] leading-none text-gray-900 font-bold font-sans text-center lg:text-5xl lg:text-center lg:leading-tight mb-7">
              Digital Tools to personify your needs
            </h1>

            <p className="max-w-full text-center text-gray-500 lg:text-right lg:max-w-4xl text-[20px]">
              The platform gives much more than jst insurance. Use our
              proprietary tools to find the right protection solutions, wellness
              programs, emergency assistance programs etc.
            </p>
          </div>
        </div>
      </section>

      {/*lunching landing page */}
      <section id="home" className="py-5 my-20" data-aos="fade-up">
        <section className="pcontainer_1 flex flex-wrap items-center justify-evenly mx-auto mt-10 md:px-12 md:flex-row">
          <div className="lg:w-2/2">
            <img
              src="https://finizoninsurance.com/assets/img/Partnership-bro.svg"
              alt=""
            />
          </div>

          <div className=" mb-17 lg:mb-0 lg:w-2/2 w-[500px] ">
            <h1 className="max-w-full text-[2.9rem] leading-none text-gray-900 font-bold font-sans lg:text-5xl lg:leading-tight mb-7">
              <br />
              “Launching India’s first
              <br />
              <span className="text-[#00a0ad]">
                phydigital finance experience!”
              </span>
            </h1>

            <div className="max-w-full text-gray-500 text-[20px] ml-10">
              <div className="flex gap-2">
                <img
                  src="https://finizoninsurance.com/assets/img/right-arrow.png"
                  alt=""
                />
                <p>Make decisions closely with the experts</p>
              </div>
              <br />
              <div className="flex gap-2">
                <img
                  src="https://finizoninsurance.com/assets/img/right-arrow.png"
                  alt=""
                />
                <p>Find the right financial products and tools for you</p>
              </div>
              <br />
              <div className="flex gap-2">
                <img
                  src="https://finizoninsurance.com/assets/img/right-arrow.png"
                  alt=""
                />
                <p>Never miss out on the best available offers</p>
              </div>
            </div>

            <div className="flex justify-center mt-14 lg:justify-start">
              <button
                type="button"
                className="text-white bg-[#e27e28] font-medium rounded-lg px-20 py-7 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
              >
                learn more
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* same for all alert page */}
      <section className="py-5 flex justify-center" data-aos="fade-up">
        <div className="flex justify-evenly rounded-3xl bg-[#fff] z-1 alert_1 xl:w-[80%]">
          <div>
            <img
              src="https://finizon.com/assets/img/grow_investment_icon.svg"
              alt=""
            />
          </div>

          <div className="text-[42px] text-bold">
            <h1>
              Grow your family's investment in<br></br>one place
            </h1>
          </div>

          <div className="flex flex-col justify-center">
            <button
              type="button"
              className="text-white bg-[#e27e28] font-medium rounded-lg px-20 py-7 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out text-[12px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Insure;
