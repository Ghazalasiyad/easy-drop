import React from 'react'
import Form from '../../components/Form/Form';
import WhyChooseUs from '../../components/WhyUs/WhyUs';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight } from "react-feather";
import "swiper/swiper-bundle.css";
import SliderCard from '../../components/SliderCard/SliderCard';
import { SliderData } from '../../components/SliderCard/SliderData';

const Pick = () => {
  const schools = [
    {
      name: "International School",
      logo: "/images/kiu.png",
    },
    {
      name: "College Logo",
      logo: "/images/public.png",
    },
    {
      name: "Modern Education",
      logo: "/images/Akhss.png",
    },
    {
      name: "Elysian",
      logo: "/images/elysian.png",
    },
    {
      name: "Educational Institution",
      logo: "/images/police.png",
    },
  ]
  return (
    <div>
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 pl-36">
        <h1 className="text-3xl font-bold mb-6">
          <span className="text-[#2E2C80]">Pick & Drop</span> Service
        </h1>
        <p className="text-gray-800 mb-12 leading-relaxed">
          <span className="text-[#2E2C80] font-bold">Easydrop</span>
          ensures safe, reliable transportation for students<br></br> and professionals.
          Affordable monthly plans designed for<br></br> convenience and flexibility.
          Sign up online with ease and <br></br>customize your schedule effortlessly.
          Experience smooth,<br></br>stress-free commutes tailored to your routine.
        </p>
        <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
          Subscribe
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/images/group.png" className="w-[559px] h-[529px]" />
      </div>
    </div>
    
</div>
<section className="w-full bg-white py-12 md:py-16">
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 2xl:px-48">
          <div className=" max-w-3xl  mb-28">
            <h2 className="text-4xl md:text-4xl leading-[57px] font-semibold mb-4">
             <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">Drive Safe,</span> Arrive Happy!
            </h2>
            <p className="text-lg md:text-xl font-normal leading-[27px] max-w-3xl text-[#666666]">
            Your safety inspires us to go the extra mile, ensuring every journey is secure, reliable, and stress-free.
            </p>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 3,
              },
              1380: {
                slidesPerView: 2,
              },
              1480: {
                slidesPerView: 3,
              },
            }}
            className="!pb-24"
          >
            {SliderData.map((review, index) => (
              <SwiperSlide key={index}>
                <SliderCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex border-b border-[#c1d0e5]  justify-between mt-0 mb-5  relative h-[85px] w-[560px]">
            <h2 className='text-2xl font-bold leading-[44px]'>Need <span className='bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text'>Pick & Drop</span></h2>
            <div className="flex  gap-[100px] justify-between">
              <button className="next-button w-9 h-9  rounded-full flex  mx-2">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
     
      <div> <Form/></div>
      <div><WhyChooseUs/></div>

      {/* Our Trusted School Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl  leading-[28px] font-semibold mb-4">
            Our Trusted <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">School and Colleges</span>, Universities
          </h2>
          <p className="text-[#666666] font-normal text-lg leading-[26px]">
            Reliable transportation for schools, colleges, and universities,
            <br />
            ensuring safe and timely commutes every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {schools.map((school, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300  w-[197px] h-[216px] aspect-square flex items-center justify-center"
            >
              <img src={school.logo || "/placeholder.svg"} alt={school.name} className="w-[98px] h-[96px]  object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
</div>



  )
}

export default Pick;