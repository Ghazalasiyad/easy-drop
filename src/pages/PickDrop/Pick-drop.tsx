import WhyChooseUs from "../../components/WhyUs/WhyUs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight } from "react-feather";
import "swiper/swiper-bundle.css";
import SliderCard from "../../components/SliderCard/SliderCard";
import { SliderData } from "../../components/SliderCard/SliderData";
import PickDropForm from "../../components/Form/PickDropForm";
import { motion } from "framer-motion";
import CounterList from "../../counters/CounterList";
import Testimonials from "../../components/SliderComp/Testimonials";
import group from "../../assets/Images/group.png"
import kiu from "../../assets/Images/kiu.png"
import school from "../../assets/Images/school.png"
import Akhss from "../../assets/Images/Akhss.png"
import elysian from "../../assets/Images/elysian.png"
import police from "../../assets/Images/police.png"
import Footer from '../../components/Footer/Footer';

const Pick = () => {
  const schools = [
    {
      name: "International School",
      logo: kiu,
    },
    {
      name: "College Logo",
      logo: school,
    },
    {
      name: "Modern Education",
      logo: Akhss,
    },
    {
      name: "Elysian",
      logo: elysian,
    },
    {
      name: "Educational Institution",
      logo: police,
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div
         
          className="container  pt-[10%]  mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-1/2 lg:pr-6 xl:pr-12 mb-8 lg:mb-0 px-4 sm:px-8 lg:px-0 lg:pl-8 xl:pl-36 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-5xl leading-[60px] sm:text-3xl font-semibold mb-4 sm:mb-6"
            >
              Your <span className="text-[#2E2C80]">Journey, </span><br/>
              our Commitment
              
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="text-[#666666] leading-[30px] text-lg mb-8 sm:mb-12 font-normal sm:text-base"
            >
              Easy Drop offers reliable pick-and-drop services for students, schools, 
              colleges, and businesses with monthly fixed-budget plans. We ensure safe, punctual, and hassle-free commuting every day
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]"
            >
              Subscribe
            </motion.button>
          </motion.div>
          <div
          
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              src={group}
              alt="Pick & Drop Service"
              className="w-full max-w-[559px] h-auto object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      </div>

      <div>
        <CounterList />
      </div>



      {/* Second Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 2xl:px-48">
          {/* Heading & Description */}
          <motion.div
            className="max-w-3xl mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-4xl leading-[57px] font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Drive Safe,
              </span>{" "}
              Arrive Happy!
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl font-normal leading-[27px] max-w-3xl text-[#666666]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your safety inspires us to go the extra mile, ensuring every
              journey is secure, reliable, and stress-free.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
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
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1280: { slidesPerView: 3 },
                1380: { slidesPerView: 2 },
                1480: { slidesPerView: 3 },
              }}
              className="!pb-24"
            >
              {SliderData.map((review, index) => (
                <SwiperSlide key={index}>
                  <SliderCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div
            className="flex border-b border-[#c1d0e5] justify-between mt-0 mb-5 relative h-[85px] w-[560px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl font-bold leading-[44px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ once: true }}
            >
              Need{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Pick & Drop
              </span>
            </motion.h2>
            <div className="flex gap-[100px] justify-between">
              <motion.button
                className="next-button w-9 h-9 rounded-full flex mx-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
              >
                <ArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div>
        <PickDropForm />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div>
        <Testimonials />
      </div>

      {/* Our Trusted School Section */}
      <motion.section 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-8 sm:py-12 md:py-16 bg-white"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              Our Trusted{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                School and Colleges
              </span>
              , Universities
            </h2>
            <p className="text-[#666666] font-normal text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Reliable transportation for schools, colleges, and universities,
              ensuring safe and timely commutes every day
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {schools.map((school, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[197px] aspect-square flex items-center justify-center"
              >
                <img
                  src={school.logo || "/placeholder.svg"}
                  alt={school.name}
                  className="w-full h-full max-w-[98px] max-h-[96px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Pick;
