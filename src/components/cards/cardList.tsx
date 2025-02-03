import { CardProps } from "../../Types/type";
import { FaCar, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaCarSide, FaUserTie } from "react-icons/fa";
import Card from "./card";

const cardData: CardProps[] = [
  {
    icon: <FaCar className="text-blue-500 text-4xl" />,
    title: "Pick & Drop",
    description: "Effortless commuting with our Pick & Drop service, ensuring a comfortable ride."
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500 text-4xl" />,
    title: "Multiple Locations",
    description: "Discover the convenience of our expansive service network."
  },
  {
    icon: <FaPhone className="text-blue-500 text-4xl" />,
    title: "Anytime Reservation",
    description: "Enjoy the flexibility of making reservations anytime."
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
    title: "Safe & Secure",
    description: "Ensuring safety, punctuality, and comfort with professional drivers."
  },
  {
    icon: <FaCarSide className="text-blue-500 text-4xl" />,
    title: "Vehicle Options",
    description: "Choose from reliable, comfortable vehicles tailored to your travel needs."
  },
  {
    icon: <FaUserTie className="text-blue-500 text-4xl" />,
    title: "Polite Driver",
    description: "Travel safely with Easy Drop's polite and professional drivers."
  },
];

const CardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
