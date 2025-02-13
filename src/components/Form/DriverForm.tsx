import type React from "react";
import { useState } from "react";

interface FormData {
  name: string;
  contactNumber: string;
  Cnic: string;
  serviceType: string;
 
  vehicleType: string;
  vehiclemodel: string;
  seater: string;
  experience: string;
}

const DriverForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    Cnic: "",
    serviceType: "",
    vehicleType: "",
    vehiclemodel: "",
    seater: "",
    experience: "",
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
          <h2 className="text-3xl font-normal leading-[42px] pl-[4%]">
          Add  <span className=" font-semibold bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
          Driver and Vehicle
             </span> details{" "}
           
          </h2>
          <p className="text-gray-600 mt-2 pl-[4%] ">
          Submit your driver and vehicle details to join the EasyDrop team and start earning. Help us 
          provide <br/> safe and reliable transportation by sharing accurate information.
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
                  htmlFor="Cnic"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                 Cnic
                </label>
                <input
                  id="Cnic"
                  type="text"
                  placeholder="Enter Cnic Number"
                  name="Cnic"
                  value={formData.Cnic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8]  rounded-md focus:outline-none "
                />
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                  <option value="">Pick and Drop</option>
                  <option value="1">service1</option>
                  <option value="2"> service2 </option>
                  <option value="3">service3 </option>
                  <option value="4">service4 </option>
                </select>
              </div>
             
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-6">
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
            
              

              <div className="flex-1 max-w-[195px] space-y-2">
                <label
                  htmlFor="vehiclemodel"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Vehicle Model
                </label>
                <input
                  id="vehicleModel"
                  type="text"
                  placeholder="2024"
                  name="passengers"
                  value={formData.vehiclemodel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none "
                />
              </div>
              <div className="flex-1 max-w-[250px] space-y-2">
                <label
                  htmlFor="seater"
                  className="block text-sm font-medium text-[#7f8a8f]"
                >
                 Seater
                </label>
                <select
                  id="seater"
                  name="seater"
                  value={formData.seater}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5  bg-[#e7edf3]  text-[#b8c0c8]  rounded-md focus:outline-none"
                >
                 
                  <option value="1">9</option>
                  <option value="2"> 10 </option>
                  <option value="3">11 </option>
                  <option value="4">12 </option>
                </select>
              </div>
              <div className="flex-1 max-w-[195px] space-y-2">
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-[#7f8a8f] "
                >
                  Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  placeholder="5 years"
                  name="experience"
                  value={formData.experience}
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

export default DriverForm;
