import React from 'react'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import Car from '../../../public/icons/Car.png'
import ExpertDriversCard from '../../components/ExpertDrivers/ExpertDriversCard';
import {ExpertDriversData} from '../../components/ExpertDrivers/ExpertDriversData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, } from "swiper/modules";
import Form from "../../components/Form/Form"
import "swiper/swiper-bundle.css";

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

const benefits: BenefitCard[] = [
  {
    title: "Flexible Work Hours",
    description: "Choose your own schedule, allowing you to balance work and personal life while maximizing your earnings.",
    icon: Car,
  },
  {
    title: "Attractive Earnings",
    description: "Ensuring safety, punctuality, and comfort with professional drivers and well-maintained vehicles",
    icon: Car
  },
  {
    title: "Maintenance Support",
    description: "Choose your own schedule, allowing you to balance work and personal life while maximizing your earnings.",
    icon: Car
  },
  {
    title: "Secure Payments",
    description: "Receive prompt, reliable, and timely payments for every completed trip, ensuring peace of mind.",
    icon: Car
  }
];
const partner = () => {
  return (
    <div>
    <div className="mx-auto  px-4 sm:px-6 lg:px-8 py-16">
    <div className="pl-[10%] bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] mx-auto h-[640px] w-[1485px] flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 lg:pr-12 mb-[10px] lg:mb-0">
      <h1 className="text-[56px] font-semibold">Add your car <br/> and <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text"> Start </span> <br/>  <span className="text-[#2E2C80]"> earning </span> with Us</h1>
    
       <p className="font-normal text-lg text-[#666666] leading-[26px]">From daily pick-and-drop 
        services to tailored <br/> travel experiences, we’ve got you covered</p>
        <button className="mt-6 w-[170px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
        Be a Partner
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src="/images/caar.png" className="w-[682px] h-[357px]" />
      </div>
    </div>
</div>

{/* Partner section */}
<section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[38px] leading-[60px] font-normal mb-6">
            Here's What You Need <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text text-[38px] font-bold ">To A Partner</span>
          </h2>
          <p className="text-[#666666] font-normal text-base leading-[26px] max-w-4xl mx-auto">
            Reliability, Trust, And Commitment To Excellence. At Easy Drop, We Pride Ourselves On Delivering Safe,
            Punctual, And Hassle-Free Pick-And-Drop Services Tailored To Your Needs. Whether For Students, Schools, Or
            Businesses,
            <br />
            We're Your Dependable Partner For Seamless Daily Commuting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Register Card */}
          <div className="text-center p-6">
            <div className="mb-6 relative">
              <img
                src="/images/vector.png"
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                aria-hidden="true"
              />
              <img
                src="/images/register.png"
                alt="Register your car"
                className="relative z-10 w-64 h-64 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-normal leadin-[36px] mb-3">
              Register <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">Your Car</span>
            </h3>
            <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
              Partner with us and add your car to <br/> provide safe, reliable and hassle-<br/>free commuting services.
            </p>
          </div>

          {/* Contact Card */}
          <div className="text-center p-6">
            <div className="mb-6 relative">
              <img
                src="/images/vector.png"
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                aria-hidden="true"
              />
              <img
                src="/images/boy.png"
                alt="Contact us"
                className="relative z-10 w-60 h-64 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-normal leading-[36px] mb-3">
              Contact <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">With US</span>
            </h3>
            <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
              Get in touch with us for safe, reliable,<br/> and hassle-free commuting <br/> solutions.
            </p>
          </div>

          {/* Drive Card */}
          <div className="text-center p-6">
            <div className="mb-6 relative">
              <img
                src="/images/vector.png"
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                aria-hidden="true"
              />
              <img
                src="/images/contact.png"
                alt="Drive with us"
                className="relative z-10 w-60 h-64 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-normal leading-[36px] mb-3">
              Drive <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">With Us</span>
            </h3>
            <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
              Join our team and drive with <br/> us to provide safe and reliable <br/> commuting services.
            </p>
          </div>
        </div>
      </div>
    </section>
    <PartnerSlider/>
    <section className="py-16 px-4 w-[1186px] h-[645px] mx-auto">

      

      {/* Easy Drop Text */}
      <div className="text-center mb-4">
        <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-medium text-lg leading-[18px]">Easy Drop</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-center text-[38px] font-normal leading-[60px] mb-16">
        Your Road To <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Safe And Reliable</span> Commutes
      </h2>

      {/* Features Container */}
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Left Column */}
        <div className="flex-1 space-y-8 md:max-w-[340px] h-[88px] w-[422px]">
          <div className="flex gap-4">
            <img
              src="/images/hours.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Set Your <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Own Hours</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">Enjoy flexibility and freedom by setting your own hours with EasyDrop.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/images/paid.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Get <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Paid Fast</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">Earn securely and get paid quickly with our reliable payment system.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/images/support.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Get Support <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">At Every Time</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">Receive 24/7 support to ensure a seamless and hassle-free experience.</p>
            </div>
          </div>
        </div>

        {/* Center Car Image */}
        <div className="absolute left-1/2  mt-1 md:block">
          <img
            src="/images/Groupcar.png"
            alt="Car illustration"
            className="w-[79px] h-[495px]"
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-8 md:max-w-[340px] mt-8 md:mt-0">
          <div className="flex gap-4">
            <img
              src="/images/pace.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Onboard People At Your <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Own Pace</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">
                Onboard people effortlessly and at your own pace with complete flexibility.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/images/sides.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Safe Rides, <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Reliable Service</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">Enjoy safe rides and reliable service every time you travel with us.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/images/anywhere.png"
              alt=""
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <div>
              <h3 className="font-normal text-xl leading-[30px] mb-1">
                Go Anywhere With <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">Easy Drop</span>
              </h3>
              <p className="text-[#2D2D2D] font-normal text-base leading-[27px]">Travel anywhere with ease and reliability, only with Easy Drop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Why drive with us section  */}
    <section className="py-16 bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] mt-[10%]">
      <div className="max-w-[1920px] h-[524px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-10">
          <h2 className="text-[38px] md:text-4xl font-semibold leading-[40px] mb-4">
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">Why drive</span>   
                 <span> with us ?</span>
          </h2>
          <p className="text-[#666666] font-normal text-xl leading-[26px] max-w-3xl mx-auto">
            Drive with Easy Drop for flexible hours, attractive earnings, and the opportunity to grow your business. Enjoy regular vehicle maintenance support and secure, timely payments for every trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 align-middle">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-[334px] h-[284px] mt-10"
            >
              <div className=" w-[52px] h-[63px] rounded-lg flex items-center justify-center mb-4">
              
                <img src={benefit.icon} alt="" />
              </div>
              <h3 className="text-xl font-medium mb-3 leading-[25px] text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-[#666666] font-normal text-sm leading-[21px] mt-8">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Expert Drivers Section */}
     <section className="w-full h-[848px] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-36">
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2  className='text-[38px] font-semibold leading-[42px]'>Our <span className='bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text'>Expert</span> Drivers</h2>
            
            <p className="text-[#59636A] text-lg leading-[26px] font-normal md:text-xl font-urbanist mt-4 max-w-3xl mx-auto">
            Our expert drivers are the backbone of Easy Drop, dedicated to providing safe, 
            reliable, and punctual transportation services. With extensive experience and a commitment to customer satisfaction, they ensure every 
            ride is a smooth and hassle-free experience for our passengers.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active bg-[#B11A28]",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 2,
              },
              1380: {
                slidesPerView: 2,
              },
              1480: {
                slidesPerView: 4,
              },
            }}
            className="!pb-24"
          >
            {ExpertDriversData.map((feature, index) => (
              <SwiperSlide key={index}>
                <ExpertDriversCard {...feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    
  
</div>
  )
}

export default partner