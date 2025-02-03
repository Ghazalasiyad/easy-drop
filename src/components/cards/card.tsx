import clsx from "clsx"; 
import { CardProps } from '../../Types/type';

const Card: React.FC<CardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={clsx(
        "bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105",
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
