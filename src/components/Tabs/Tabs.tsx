import { motion } from "framer-motion";
import { useState } from "react";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("bolan");

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Bolan Van",
      image: "/images/van.jpg",
      price: 10000,
      type: "bolan",
    },
    {
      id: 2,
      name: "Tx Parado",
      image: "/images/tx.jpg",
      price: 10000,
      type: "parado",
    },
    {
      id: 3,
      name: "Bolan Van",
      image: "/images/bolan.jpg",
      price: 10000,
      type: "bolan",
    },
    {
      id: 4,
      name: "Tx Parado",
      image: "/images/tx.jpg",
      price: 10000,
      type: "parado",
    },
  ];

  // Display the same vehicles for all tabs
  const filteredVehicles = vehicles;

  return (
<div className="container mx-auto px-4 py-12 bg-[#F7F9FC]">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-semibold leading-[42px] mb-4 mt-10">
      <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] pr-2 text-transparent bg-clip-text">
        Book
      </span>
      Vehicle
    </h1>
    <p className="text-[#666666] font-normal text-lg max-w-3xl leading-[26px] mx-auto">
      Pre-designed tour packages to explore the beauty of Gilgit-Baltistan.
      Customizable trips with your choice of vehicle, destinations, and
      duration. Comfortable and well-maintained transport for a stress-free
      travel experience.
    </p>
  </div>

  {/* Buttons for selecting vehicle types */}
  <div className="flex justify-center gap-2 mb-12">
    {[
      { id: "bolan", label: "Bolan Car" },
      { id: "suzuki", label: "Suzuki" },
      { id: "parado", label: "TX Parado" },
    ].map((tab) => (
      <motion.button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`px-6 py-3 text-[11.31px] font-medium leading-[16.96px] rounded-md shadow-md transition-all duration-300
          ${
            activeTab === tab.id
              ? "bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
              : "bg-white text-black hover:bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] hover:text-white"
          }`}
      >
        {tab.label}
      </motion.button>
    ))}
  </div>

  {/* Vehicle Cards Grid */}
  <div className="max-w-full mx-auto flex lg:flex-nowrap flex-wrap justify-center gap-8 p-2">
    {filteredVehicles.map((vehicle) => (
      <motion.div
        key={vehicle.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="w-[386px] bg-[#F7F9FC] border-[1px] border-[#F7F9FC] shadow-md rounded-lg h-[393px] overflow-hidden transition-all duration-300 hover:bg-white hover:border-transparent"
      >
        {/* Image Section */}
        <div className="relative w-[356px] h-[246px]">
          <img
            src={vehicle.image || "/placeholder.svg"}
            alt={vehicle.name}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Title & Price */}
        <div className="p-4 flex justify-between items-center w-[356px] h-[93px]">
          <h3 className="font-semibold text-xl leading-[12px]">
            {vehicle.name}
          </h3>
          <p className="text-[8px] font-medium leading-[12px] text-black text-left">
            Starting from <br />
            <span className="block text-[#2C3486] text-sm leading-[12px] text-left pr-5 font-medium">
              PKR. {vehicle.price}
            </span>
          </p>
        </div>

        {/* Button Section */}
        <div className="flex justify-between items-center ml-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 text-xs border border-[#2C3486] text-[#2C3486] rounded-md shadow-md text-[14px] font-medium leading-[14px] hover:bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] hover:text-white"
          >
            Request a Quote
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</div>
    
  );
}
