import type React from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  icon1: string;
  icon2: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Pick & Drop",
    description:
      "Effortless commuting made simple with our Pick & Drop service, ensuring a comfortable ride to your destination.",
    icon1: "/images/car.png",
    icon2: "/images/location.png",
  },
  {
    title: "Safe & Secure",
    description:
      "Ensuring safety, punctuality, and comfort with professional drivers and well-maintained vehicles.",
    icon1: "/images/car.png",
    icon2: "/images/location.png",
  },
  {
    title: "Anytime Reservation",
    description:
      "Enjoy the flexibility of making reservations at your convenience with our Anytime Reservation service.",
    icon1: "/images/car.png",
    icon2: "/images/location.png",
  },
  {
    title: "Pick & Drop",
    description:
      "Effortless commuting made simple with our Pick & Drop service, ensuring a comfortable ride to your destination.",
    icon1: "/images/car.png",
    icon2: "/images/location.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-8 pl-[6%]">
          <h2 className="text-3xl font-bold pl-[4%]">
            Why{" "}
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              choose us
            </span>
          </h2>
          <p className="text-[#666666] mt-2 pl-[4%]">
            At EasyDrop, we prioritize your convenience, safety, and satisfaction. Whether it's reliable pick-and-drop
            <br />
            services or unforgettable travel experiences, we ensure top-notch service tailored to your needs.
          </p>
        </div>

        <div className="mt-10 flex justify-center px-10">
          <motion.div 
            className="grid gap-10 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg w-[340px] h-[284px]"
                variants={cardVariants}
              >
                <div className="flex justify-between mb-4">
                  <img src={card.icon1 || "/placeholder.svg"} alt={card.title} className="h-10 w-10" />
                  <img src={card.icon2 || "/placeholder.svg"} alt={card.title} className="h-10 w-10" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">{card.title}</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
