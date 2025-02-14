import React, { useState } from "react"
import { ArrowRight } from "react-feather"

interface CardProps {
  imageSrc: string
  title: string
  description: string
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col w-full flex-shrink-0 px-2">
    <img src={imageSrc || "/placeholder.svg"} alt={title} className="rounded-lg object-cover w-full h-[200px]" />
    <div className="pt-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
)

const PartnerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cards = [
    {
      imageSrc: "/images/easydrop.png",
      title: "Join Easy Drop",
      description: "Join an Easy Drop to be a partner and start driving with us to provide safe and reliable commuting services.",
    },
    {
      imageSrc: "/images/partner.png",
      title: "Become a partner",
      description: "Start earning with Easy Drop. Connect your drivers and upload the required documents to your profile.",
    },
    {
      imageSrc: "/images/easydrop.png",
      title: "Flexible Hours",
      description: "Choose your own schedule and work when it's convenient for you. Perfect for those seeking work-life balance.",
    },
    {
      imageSrc: "/images/partner.png",
      title: "Earn More",
      description: "Take advantage of surge pricing and bonuses to maximize your earnings. The more you drive, the more you can earn.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= cards.length ? 0 : prevIndex + 1))
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Slider Container */}
      <div className="overflow-hidden mb-12 pt-[6%] bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 flex-shrink-0">
              <Card {...card} />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex border-b border-[#c1d0e5] justify-between mt-10 mb-5 relative h-[85px] w-full max-w-md">
          <h2 className="text-2xl font-bold leading-[44px] bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
            Be A Partner With Us
          </h2>
          <button onClick={nextSlide} className="next-button w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PartnerSlider
