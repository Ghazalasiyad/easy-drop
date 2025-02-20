import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import formimg from "../../assets/ImagesGallery/formimg.png"

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
  const formRef = useRef<HTMLFormElement>(null);
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
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_7ty2wk2",
          "template_8wwro0o",
          formRef.current,
          "hRMsfCXWHx-PVRRzw"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            console.error("Error sending email:", error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
      <motion.div
        className="container mx-auto px-4 py-8 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        
      >
        <div className="container mx-auto">
          <div className="mb-8 ml-8">
            <h2 className="text-2xl sm:text-3xl font-bold pl-0 sm:pl-[4%]">
              Book a
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                {" "}
                Tour
              </span>
            </h2>
            <p className="text-gray-600 mt-2 pl-0 sm:pl-[4%] text-sm sm:text-base">
              Secure your spot with just a click! Whether it's a daily commute
              or an adventure of a lifetime, EasyDrop makes booking quick and
              hassle-free.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="pl-0 sm:pl-[4%] space-y-4 sm:space-y-6 w-full lg:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
             
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {Object.keys(formData).map((key) => (
                  <motion.div
                    key={key}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * Object.keys(formData).indexOf(key),
                    }}
                  >
                    <label
                      htmlFor={key}
                      className="block text-sm font-medium text-[#7f8a8f]"
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <input
                      id={key}
                      type="text"
                      placeholder={`Enter ${key}`}
                      name={key}
                      value={formData[key as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#b8c0c8] rounded-md focus:outline-none"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Request Quote
              </motion.button>
            </motion.form>

            <motion.div
              className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={formimg}
                alt="Tour Illustration"
                className="object-contain w-full max-w-[416px] h-auto"
              />
               
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;
