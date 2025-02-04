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
    <div className="bg-white rounded-xl border-[1px] hover:border-[1px] border-[#F5F5F5] hover:border-[#F5F5F5] p-6 hover:shadow-xl relative">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{name}</h3>
        
          {/* <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div> */}
        </div>
        {/* <div className="absolute top-6 right-6">
          <img src={blur} alt="" />
        </div> */}
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

export default SliderCard;
