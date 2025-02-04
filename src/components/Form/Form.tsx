import type React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  contactNumber: string;
  numberOfDays: string;
  location: string;
  vehicleType: string;
  destination: string;
  passengers: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    numberOfDays: "",
    location: "",
    vehicleType: "",
    destination: "",
    passengers: "",
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
          <h2 className="text-3xl font-bold pl-[4%]">
            Book a{" "}
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              Tour
            </span>
          </h2>
          <p className="text-gray-600 mt-2 pl-[4%] ">
            Secure your spot with just a click! Whether it's a daily commute or
            an adventure of a<br /> lifetime, EasyDrop makes booking quick and
            hassle-free.
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
                  htmlFor="numberOfDays"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                  Number Of Days
                </label>
                <select
                  id="numberOfDays"
                  name="numberOfDays"
                  value={formData.numberOfDays}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                  <option value="">Choose Day</option>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                </select>
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter Pickup Time"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8]  rounded-md focus:outline-none "
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 max-w-[195px] space-y-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                  Vehicle Type
                </label>
                <input
                  id="Vehicle"
                  type="text"
                  placeholder="5"
                  name="location"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>

              <div className="flex-1 max-w-[195px] space-y-2">
                <label
                  htmlFor="Destination"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Destination
                </label>
                <select
                  id="Destination"
                  name="Destination"
                  value={formData.destination}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5   bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                >
                  <option value="">Gilgit</option>
                  <option value="1">Danyore</option>
                  <option value="2">Sultanabad</option>
                  <option value="3">Oshikhandas</option>
                  <option value="4">city</option>
                </select>
              </div>
              <div className="flex-1 max-w-[195px] space-y-2">
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  passengers
                </label>
                <input
                  id="passengers"
                  type="text"
                  placeholder="Enter Pickup Time"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none "
                />
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

export default Form;
