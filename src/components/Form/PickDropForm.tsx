import type React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  contactNumber: string;
  location: string;
  pickup: string;
  droptiming: string;
  vehicleType: string;
  destination: string;
}

const PickDropForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    location: "",
    pickup: "",
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
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-[38px] font-semibold leading-[1.2] sm:leading-[42px] pl-0 sm:pl-[4%]">
              Monthly Pick &{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Drop Services
              </span>
            </h2>
            <p className="text-[#666666] font-normal text-base sm:text-lg leading-[1.5] sm:leading-[27px] mt-2 pl-0 sm:pl-[4%]">
              Secure your spot with just a click! Whether it's a daily commute
              or an adventure of a <br className="hidden sm:inline" /> lifetime,
              EasyDrop makes booking quick and hassle-free.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <form
              onSubmit={handleSubmit}
              className="pl-0 sm:pl-[4%] space-y-4 sm:space-y-6 w-full lg:w-auto"
            >
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#7f8a8f]"
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
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-[#7f8a8f]"
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
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
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
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  >
                    <option value="">Choose location</option>
                    <option value="1">Gilgit</option>
                    <option value="2">Jutial</option>
                    <option value="3">Danyore</option>
                    <option value="4">City</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="pickup"
                    className="block text-sm font-medium text-[#7f8a8f]"
                  >
                    Pick Up Timing
                  </label>
                  <input
                    id="pickup"
                    type="time"
                    placeholder="Time"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="droptiming"
                    className="block text-sm font-medium text-[#7f8a8f]"
                  >
                    Drop off Timing
                  </label>
                  <input
                    id="droptiming"
                    type="time"
                    placeholder="Time"
                    name="droptiming"
                    value={formData.droptiming}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="Vehicle"
                    className="block text-sm font-medium text-[#7f8a8f]"
                  >
                    Vehicle Type
                  </label>
                  <select
                    id="Vehicle"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  >
                    <option value="1">Bolan</option>
                    <option value="2">Van</option>
                    <option value="3">Car</option>
                    <option value="4">TX</option>
                  </select>
                </div>
                <div className="space-y-2">
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
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                  >
                    <option value="1">Gilgit</option>
                    <option value="2">Hunza</option>
                    <option value="3">Jutial</option>
                    <option value="4">city</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full sm:w-auto rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors">
                Request Quote
              </button>
            </form>

            <div className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-8 lg:mt-0">
              <img
                src="/images/formimg.png"
                alt="Tour Illustration"
                className="object-contain w-full max-w-[416px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropForm;
