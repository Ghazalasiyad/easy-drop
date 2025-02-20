import React from "react";
import { motion } from "framer-motion";
import GalleryImages from "./GalleryImages";

const AboutGallery: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:h-[100%] lg:pt-35">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="w-full text-center lg:text-left" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-b from-[#2E2C80] to-[#2458A4] 
            text-transparent bg-clip-text mb-4">
              About Us
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg ">
              Easy Drop offers reliable pick-and-drop services with fixed <br /> monthly plans, ensuring safe, punctual,and hassle-free <br /> commutes.
              We simplify daily travel for{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">
                students,<br /> schools, colleges, and businesses
              </span>.
            </p>
          </motion.div>

          <motion.div className="w-full" variants={fadeInUp}>
            <GalleryImages />
          </motion.div>
        </motion.div>
      </div>
    </div>

  );
};

export default AboutGallery;
