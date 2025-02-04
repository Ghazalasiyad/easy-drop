import React from 'react'
import Form from '../../components/Form/Form';
import WhyChooseUs from '../../components/WhyUs/WhyUs';
// import "swiper/swiper-bundle.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import "swiper/swiper-bundle.css";
// import SliderCard from '../../components/SliderCard/SliderCard';
// import { SliderData } from '../../components/SliderCard/SliderData';

const Pick = () => {
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
{/* <section className="w-full bg-white py-12 md:py-16">
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 2xl:px-48">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-3xl md:text-4xl  font-urbanist font-bold mb-4">
              What Our <span className="text-[#97171F]">Clients Say</span>
            </h2>
            <p className="text-[#59636A] text-sm md:text-xl font-urbanist mt-4 max-w-3xl mx-auto">
              Discover why Hotela is a trusted parter for Hoteliers Worldwide
              Read genuine reviews from Satisfied Users!
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
          <div className="flex justify-center items-center mt-0 mb-5 relative">
            <div className="bottom-0 flex justify-center space-x-4">
              <button className="prev-button w-9 h-9 border border-[#7C0914] text-[#7C0914] rounded-full flex justify-center items-center hover:bg-[#7C0914] hover:text-white transition mx-2">
                <ChevronLeft />
              </button>
              <button className="next-button w-9 h-9 border border-[#7C0914] text-[#7C0914] rounded-full flex justify-center items-center hover:bg-[#7C0914] hover:text-white transition mx-2">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section> */}
     
      <div> <Form/></div>
      <div><WhyChooseUs/></div>
</div>



  )
}

export default Pick;