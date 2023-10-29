import React from 'react'

function Insure() {
    return (

        <section className='wrapper_1'>

            <div>
                {/* slider div */}
            </div>

            {/* icons */}

            <div className='landing_page  w-full  relative  top-[40px]'>
                {/* first bar */}
                <div className='flex justify-evenly pb-20 ' id='landing_1'>

                    <div className='text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/two_wheeler_insurance-img1_FwtLcqz.svg" alt="" />
                        <h3>Two-wheeler insurence</h3>
                    </div>

                    <div className='text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/car_insurance-img2.svg" alt="" />
                        <h3>Car insurence</h3>
                    </div>

                    <div className='text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/medical_insurance-img3.svg" alt="" />
                        <h3>Health insurence</h3>
                    </div>

                    <div className='w-[95px] text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/hospicash-img4.png" alt="" />
                        <h3>Hospicash</h3>
                    </div>

                    <div className='text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/term_life_insurance-img5.svg" alt="" />
                        <h3>Life insurence</h3>
                    </div>

                </div>

                {/* second bar */}
                <div className='flex justify-evenly pb-20' id='landing_2'>

                    <div className=' w-[95px] text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/insureright-img6.png" alt="" />
                        <h3>InsureRight</h3>
                    </div>

                    <div className='w-[95px] text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/InsureFit_360_GOQii.png" alt="" />
                        <h3>InsureFit 360</h3>
                    </div>

                    <div className='w-[95px] text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/Shopkeeper.png" alt="" />
                        <h3>Shopkeeper Insurence</h3>
                    </div>

                    <div className='w-[95px] text-[16px] text-center'>
                        <img src="https://finizon.com/media/admin/verticalProducts/unit_link_insurance-img10_qSGO2cz.svg" alt="" />
                        <h3>Savings & Insurence</h3>
                    </div>
                </div>
            </div>

            {/* hero section 1 */}
            <div className='hero_seaction_1 w-full  relative  top-[140px] '>

                <div className='hero_section_child1 flex justify-around'>
                    {/* responsive code take from here */}
                    <div className=''>

                        <h1 className='text-[40px] text-[#465a65]  font-semibold'><span className='underline decoration-[#e27e28]'>Insure</span> Right</h1>

                        <p className='text-[24px] text-[#707070] mb-[35px]'>Let our proprietary tool suggest<br></br>
                            the right coverage for you in under 4 mins
                        </p>


                        <button className="bg-[#e27e28] hover:bg-blue-700 text-white font-bold py-5 px-12 rounded">
                            <h2 className='text-[15px]'>Enroll now</h2>
                        </button>

                    </div>

                    <div className=''>
                        <div className='lg:w-2/2'>
                            <img src="https://finizoninsurance.com/assets/img/protect_right_illustration.svg" alt="" />
                        </div>
                    </div>
                </div>

            </div>


            {/*second hero section 2  */}

            <div className='hero_seaction_2 w-full  relative  top-[165px] '>

                <div className='hero_section_child1  flex justify-around w-full p-20'>
                    {/* responsive code take from here */}
                    <div className=''>

                        <h1 className='text-[40px] text-[#465a65] font-semibold'> 
                        Compare Insurance across Companies
                        </h1>

                        <p className='text-[24px] text-[#707070]'>Be it Life, Motor or Health insurance, compare insurance<br></br> plans across 35+ insurers
                        </p>

                    </div>

                    <div className=''>
                        <div className='lg:w-2/2'>
                            <img src="https://finizoninsurance.com/assets/img/feature_illustration_1.svg" alt="" className='w-[300px] '/>
                        </div>
                    </div>
                </div>
            </div>


            {/* third hero section */}

            <div className='heroSection3'>
                <div className=''>
                    <img src="" alt="" />
                </div>

                <div className=''>
                    
                </div>
            </div>
        </section>

    )
}

export default Insure
