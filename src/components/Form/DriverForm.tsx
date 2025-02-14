import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  contactNumber: string
  Cnic: string
  serviceType: string
  vehicleType: string
  vehiclemodel: string
  seater: string
  experience: string
}

const DriverForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    Cnic: "",
    serviceType: "",
    vehicleType: "",
    vehiclemodel: "",
    seater: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formRef.current) {
      emailjs.sendForm("service_7ty2wk2", "template_x7to1s8", formRef.current, "hRMsfCXWHx-PVRRzw").then(
        (result) => {
          console.log("Email sent successfully:", result.text)
        },
        (error) => {
          console.error("Error sending email:", error.text)
        },
      )
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 sm:py-12 bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-normal leading-[42px] pl-0 sm:pl-[4%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Add{" "}
            <span className="font-semibold bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              Driver and Vehicle
            </span>{" "}
            details
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-2 pl-0 sm:pl-[4%] text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Submit your driver and vehicle details to join the EasyDrop team and start earning. Help us provide{" "}
            <br className="hidden sm:inline" /> safe and reliable transportation by sharing accurate information.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="pl-0 sm:pl-[4%] space-y-4 sm:space-y-6 w-full lg:w-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[#7f8a8f]">
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
                <label htmlFor="contactNumber" className="block text-sm font-medium text-[#7f8a8f]">
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
                <label htmlFor="Cnic" className="block text-sm font-medium text-[#7f8a8f]">
                  Cnic
                </label>
                <input
                  id="Cnic"
                  type="text"
                  placeholder="Enter Cnic Number"
                  name="Cnic"
                  value={formData.Cnic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="serviceType" className="block text-sm font-medium text-[#7f8a8f]">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                >
                  <option value="">Pick and Drop</option>
                  <option value="1">service1</option>
                  <option value="2">service2</option>
                  <option value="3">service3</option>
                  <option value="4">service4</option>
                </select>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label htmlFor="Vehicle" className="block text-sm font-medium text-[#7f8a8f]">
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
                <label htmlFor="vehiclemodel" className="block text-sm font-medium text-[#7f8a8f]">
                  Vehicle Model
                </label>
                <input
                  id="vehicleModel"
                  type="text"
                  placeholder="2024"
                  name="vehiclemodel"
                  value={formData.vehiclemodel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="seater" className="block text-sm font-medium text-[#7f8a8f]">
                  Seater
                </label>
                <select
                  id="seater"
                  name="seater"
                  value={formData.seater}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                >
                  <option value="1">9</option>
                  <option value="2">10</option>
                  <option value="3">11</option>
                  <option value="4">12</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="experience" className="block text-sm font-medium text-[#7f8a8f]">
                  Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  placeholder="5 years"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full sm:w-auto rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Quote
            </motion.button>
          </motion.form>

          <div className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-8 lg:mt-0">
            <motion.img
              src="/images/formimg.png"
              alt="Tour Illustration"
              className="object-contain w-full max-w-[416px] h-auto"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DriverForm

