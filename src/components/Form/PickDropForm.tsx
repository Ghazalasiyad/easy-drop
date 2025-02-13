import type React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  contactNumber: string;
  location: string;
  pickup:string;
  droptiming: string;
  vehicleType: string;
  destination: string;

}

const PickDropForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    location: "",
    pickup:"",
    droptiming: "", 
    vehicleType: "",
    destination: "",
    
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-[38px] font-semibold leading-[42px] pl-[4%]">
          Monthly Pick & {" "}
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
            Drop Services
            </span>
          </h2>
          <p className="text-[#666666] font-normal text-lg leading-[27px] mt-2 pl-[4%] ">
          Secure your spot with just a click! Whether it’s a daily commute or an adventure 
          of a <br/> lifetime, EasyDrop makes booking quick and hassle-free.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <form onSubmit={handleSubmit} className="pl-[4%] space-y-6">
            {/* First Row */}
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  type="tel"
                  placeholder="Enter Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                  <option value="">Choose location</option>
                  <option value="1">Gilgit</option>
                  <option value="2">Jutial</option>
                  <option value="3">Danyore</option>
                  <option value="4">City</option>
                </select>
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="pickup"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Pick Up Timing
                </label>
                <input
                  id="pickup"
                  type="tel"
                  placeholder="Time"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>
              
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-6">
            <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="droptiming"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                 Drop of Timing
                </label>
                <input
                  id="droptiming"
                  type="tel"
                  placeholder="Time"
                  name="droptiming"
                  value={formData.droptiming}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="Vehicle"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                 Vehicle Type
                </label>
                <select
                  id="Vehicle"
                  name="Vehicle"
                  value={formData.vehicleType}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                 
                  <option value="1">Bolan</option>
                  <option value="2"> Van </option>
                  <option value="3">Car </option>
                  <option value="4">TX </option>
                </select>
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
               Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                 
                  <option value="1">Gilgit</option>
                  <option value="2"> Hunza </option>
                  <option value="3">Jutial </option>
                  <option value="4">city</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button className="rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors">
              Request Quote
            </button>
          </form>

          <div
            className="lg:flex items-start justify-center flex-1 "
          >
            <img
              src="/images/formimg.png"
              alt="Tour Illustration"
              className="object-contain w-[416px] h-[314px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropForm;
