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
  const filteredVehicles = vehicles;

  return (
    <div className="bg-[#F7F9FC]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          // animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          
        >
          <h1 className="text-3xl sm:text-4xl font-semibold leading-[42px] mb-4 mt-10">
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] pr-2 text-transparent bg-clip-text">
              Book
            </span>
            Vehicle
          </h1>
          <p className="text-[#666666] text-base sm:text-lg max-w-3xl leading-[26px] mx-auto">
            Pre-designed tour packages to explore the beauty of
            Gilgit-Baltistan. Customizable trips with your choice of vehicle,
            destinations, and duration.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "bolan", label: "Bolan Car" },
            { id: "suzuki", label: "Suzuki" },
            { id: "parado", label: "TX Parado" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`px-5 sm:px-6 py-3 text-sm sm:text-base font-medium rounded-md shadow-md transition-all duration-300
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center p-2">
          {filteredVehicles.map((vehicle) => (
            <div
              
              
             
              className="bg-[#F7F9FC] border hover:bg-white border-[#E6E6E6] shadow-md rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Image Section */}
              <div className="w-full h-56 md:h-64 lg:h-72">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>

              {/* Title & Price */}
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Starting from <br />
                  <span className="block text-[#2C3486] text-sm font-medium">
                    PKR. {vehicle.price}
                  </span>
                </p>
              </div>

              {/* Button Section */}
              <div className="flex pl-4 pb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="px-5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm border border-[#2C3486] text-[#2C3486] rounded-md shadow-md hover:bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] hover:text-white transition-all"
                >
                  Request a Quote
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
