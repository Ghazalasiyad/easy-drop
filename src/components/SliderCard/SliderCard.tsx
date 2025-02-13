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
    <div className="bg-white w-[333px] h-[323px]
    rounded-xl border-[1px] hover:border-[1px] border-[#F5F5F5] hover:border-[#F5F5F5] p-6 hover:shadow-xl relative">
      <div className=" items-center">
        <div className="mb-6"><img
          src={image}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        /></div>
        <div className=" font-normal text-base leading-[29px]">
          <h3 className="font-semibold mb-4 text-lg">{name}</h3>
        
        </div>
        
      </div>
      <p className="text-[#787878] text-sm font-normal leading-[22px]">{review}</p>
    </div>
  );
};

export default SliderCard;
