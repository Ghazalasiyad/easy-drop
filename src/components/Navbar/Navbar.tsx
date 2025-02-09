import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Pick & Drop", path: "/pick-drop" },
    { name: "Travel & Tour", path: "/travel" },
    { name: "Be a Partner", path: "/partner" },
  ];

  return (
    <header className="bg-gradient-to-r from-white to-blue-50">
      <nav className="w-[1450px] h-[90px] mx-auto flex justify-between items-center pt-[69px] sm:px-6">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[172px] h-[50px]" />
        </div>
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `pb-1 transition duration-300 hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="hidden md:block w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white
               transition-colors duration-200 bg-gradient-to-r from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683]">
          Contact Us
        </button>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div className="md:hidden bg-white absolute top-[90px] left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `pb-1 transition duration-300 hover:text-blue-500 ${isActive ? "border-b-2 border-blue-500 font-semibold" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white
                  transition-colors duration-200 bg-gradient-to-r from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683]">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
