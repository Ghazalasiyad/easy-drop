import React from "react";
import Gallery from "./Gallery";

const TravelTour: React.FC = () => {
    return (
        <div className="w-full h-auto bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                            <span className="text-[#2E2C80]">Travel & Tour</span> Service
                        </h1>
                        <p className="text-gray-800 mb-8 leading-relaxed text-sm sm:text-base">
                            Explore the world with our reliable Travel & Tour services! <br />
                            We offer customized packages, hassle-free bookings, and <br />
                            exceptional support for unforgettable journeys.
                        </p>
                        <button className="w-full sm:w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white transition-colors bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683]">
                            Learn More
                        </button>
                    </div>

                    <div className="w-[718px] h-[436.11px] flex justify-center">
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelTour;
