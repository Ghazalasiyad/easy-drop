import clsx from "clsx";
import { CardProps } from "../../Types/type";

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div
      className={clsx("bg-white p-12 pb-0 flex flex-col items-start text-start",
        "transition-all duration-300 ease-in-out",
        "rounded-xl hover:shadow-md",
        "hover:border-gray-200",
        "w-[418px]  h-[367px]",
        "cursor-pointer",
      )}
    >
      <div className="mb-4 w-[80px] h-[80px] flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
      <div className="w-[273.1px] h-[131.95px] pb-0" >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
