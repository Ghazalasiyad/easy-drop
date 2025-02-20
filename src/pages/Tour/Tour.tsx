import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Tabs from "../../components/Tabs/Tabs";
import Form from "../../components/Form/Form";
import { motion } from "framer-motion";
import CounterList from "../../counters/CounterList";
import Testimonials from "../../components/SliderComp/Testimonials";
import baltit from "../../assets/Images/baltit.png"
import deosai from "../../assets/Images/deosai.png"
import ghizer from "../../assets/Images/ghizer.png"
import rakaposhi from "../../assets/Images/rakaposhi.png"
import skardu from "../../assets/Images/skardu.png"
import gilgit from "../../assets/Images/gilgit.png"
import background from "../../assets/Images/background.jpg"
import Footer from '../../components/Footer/Footer';
interface SlideData {
  title: string[];
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: ["Your Adventure,", "our Mission"],
    description:
      "Easy Drop Travels Offers Reliable Travel Services With Tailored Packages For Families, Businesses, And Solo Travelers. We Ensure Safe, Comfortable, And Hassle-Free Journeys Every Time.",
    image: "/images/background.jpg",
  },
  {
    title: ["Explore", "the World"],
    description:
      "Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences. From serene beaches to bustling cities, we've got you covered.",
    image: "/images/background.jpg",
  },
  {
    title: ["Travel", "Worry-Free"],
    description:
      "Let us handle the details while you focus on enjoying your journey. Our comprehensive travel packages ensure a smooth and stress-free experience from start to finish.",
    image: "/images/background.jpg",
  },
];

const Tour: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative  w-full overflow-hidden">
     <div className="container mx-auto relative h-screen">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
    style={{ backgroundImage: `url(${background})` }}
  ></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 h-full">
    <div className="max-w-full text-center sm:text-left">
      {/* Title */}
      <h1 className="mb-4 font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px]">
        {slides[currentSlide].title.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-xl text-base sm:text-lg md:text-xl leading-[26px] sm:leading-[28px] md:leading-[30px] font-normal text-white/90">
        {slides[currentSlide].description}
      </p>

      {/* Button */}
      <button className="rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-xs sm:text-sm md:text-base font-semibold text-white transition-all">
        Make your trip
      </button>
    </div>

    {/* Navigation Buttons */}
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform items-center gap-4">
      <button
        onClick={prevSlide}
        className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border border-white rounded-full bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border border-white rounded-full bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </div>
  </div>
</div>

      <div><Tabs />
      </div>
      
      <div>
        <CounterList />
      </div>

      <motion.section
        className="py-16 px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold mb-4 text-center">
              Recent{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Gallery
              </span>
            </h2>
            <p className="text-[#666666] text-lg font-normal leading-[30px] text-center max-w-3xl mx-auto">
              From serene valleys to majestic mountains, every trip is crafted
              with your comfort and exploration in mind. Let us handle the
              logistics while you create memories that last a lifetime. Start
              your adventure today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/** Large Featured Image - Hunza Baltit Fort */}
            <motion.div
              className="relative rounded-2xl overflow-hidden md:col-span-2 row-span-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            
            >
              <img
                src={baltit}
                alt="Hunza Baltit Fort"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  Hunza Baltit Fort
                </h3>
              </div>
            </motion.div>

            {/** Other Images */}
            {[
              {
                src: deosai,
                alt: "Deosai Lake",
                height: "h-[240px]",
              },
              { src: skardu, alt: "Skardu", height: "h-[240px]" },
              {
                src: ghizer,
                alt: "Ghizer Valley",
                height: "h-[300px]",
              },
              { src: gilgit, alt: "Gilgit", height: "h-[300px]" },
              {
                src: rakaposhi,
                alt: "Rakhaposhi",
                height: "h-[300px]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
               
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full ${item.height} object-cover`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                    {item.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="rounded-md bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
             
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      </motion.section>
      <section>
        <Form />
      </section><div>
        <Testimonials />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Tour;
