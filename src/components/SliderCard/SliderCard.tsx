import { motion } from "framer-motion";
import React from "react";

// import blur from "../../../public/icons/blur.png";
interface SliderProps {
  name: string;
  
  image: string;
  // rating: number;
  review: string;
}
const SliderCard: React.FC<SliderProps> = ({
  name,
 
  image,
  review,
}) => {
  return (
    <motion.div
    className="bg-white w-full max-w-[333px] min-h-[323px] rounded-xl border border-[#F5F5F5] p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
    initial={{ opacity: 0, y: 30 }} // Starts hidden & slightly below
    whileInView={{ opacity: 1, y: 0 }} // Animates when in view
    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    viewport={{ once: false }} // Runs every time it comes into view
  >
    <div className="flex flex-col items-center sm:items-start mb-4">
      <div className="mb-4 sm:mb-6">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4 text-center sm:text-left">
        {name}
      </h3>
    </div>
    <p className="text-[#787878] text-sm font-normal leading-[22px] flex-grow">
      {review}
    </p>
  </motion.div>
  );
};

export default SliderCard;
