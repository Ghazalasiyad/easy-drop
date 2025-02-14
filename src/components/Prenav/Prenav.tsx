import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Prenav: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-900 fixed top-0 right-0 left-0 z-50">
      <div className="container h-[45px] text-white px-4 flex flex-col md:flex-row justify-around items-center text-xs mx-auto">
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-sm" />
            <span className="text-xs sm:text-sm">+92-3554347521</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-sm" />
            <span className="text-xs sm:text-sm">City, Address</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <a href="#" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaFacebook className="text-sm" />
            <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaInstagram className="text-sm" />
            <span>Instagram</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaYoutube className="text-sm" />
            <span>Youtube</span>
          </a>
        </div>
      </div>
    </div>


  );
};

export default Prenav;
