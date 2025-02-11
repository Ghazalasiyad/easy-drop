import React from 'react';
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import CounterList from '../../counters/CounterList';

const AboutUs: React.FC = () => {
  return (
    <>
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Easy Drop offers reliable pick-and-drop services with fixed monthly plans, ensuring safe, punctual, and hassle-free commutes. We simplify daily travel for <span className="text-blue-700 font-semibold">students, schools, colleges, and businesses.</span>
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <img src={Image1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Image2} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src={Image3} alt="Image 3" className="col-span-2 w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>

<div>
<CounterList />
</div>
    </>
  );
};

export default AboutUs;
