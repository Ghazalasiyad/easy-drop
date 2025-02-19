import { motion } from "framer-motion";
import React from "react";

// import blur from "../../../public/icons/blur.png";
interface SliderProps {
  name: string;
  
  image: string;
  // rating: number;
  review: string;
}
const PartnerCard: React.FC<SliderProps> = ({
  name,
 
  image,
  review,
}) => {
  return (
    <motion.div
    className="sm:p-6  relative flex flex-col"
    initial={{ opacity: 0, y: 30 }} // Starts hidden & slightly below
    whileInView={{ opacity: 1, y: 0 }} // Animates when in view
    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    viewport={{ once: false }} // Runs every time it comes into view
  >
    <div className="flex flex-col items-center sm:items-start mb-4 w-[496px] h-[396px]">
      <div className="mb-4 sm:mb-6">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="w-[496px] h-[279px]  object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg leading-[24px] sm:text-lg mb-2 sm:mb-4 text-center sm:text-left">
        {name}
      </h3>
      <p className="text-[#333333] text-base font-normal leading-[24px]">
      {review}
    </p>
    </div>
    
  </motion.div>
  );
};

export default PartnerCard;
