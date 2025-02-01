import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideData {
  title: string[]
  description: string
  image: string
}

const slides: SlideData[] = [
  {
    title: ["Your Adventure,", "our Mission"],
    description:
      "Easy Drop Travels Offers Reliable Travel Services With Tailored Packages For Families, Businesses, And Solo Travelers. We Ensure Safe, Comfortable, And Hassle-Free Journeys Every Time.",
    image: "/images/adventure.jpg",
  },
  {
    title: ["Explore", "the World"],
    description:
      "Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences. From serene beaches to bustling cities, we've got you covered.",
    image: "/images/explore.jpg",
  },
  {
    title: ["Travel", "Worry-Free"],
    description:
      "Let us handle the details while you focus on enjoying your journey. Our comprehensive travel packages ensure a smooth and stress-free experience from start to finish.",
    image: "/images/worry-free.jpg",
  },
]

const TravelSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slide */}
      <div className="relative h-full w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="mb-4 font-semibold text-white text-[56px] leading-[90px]">
              {slides[currentSlide].title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-[18px] leading-[30px] font-normal text-white/90">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <button className="rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors">
  Make your trip
</button>

          </div>

          {/* Navigation */}
          <div className="absolute  bottom-8 left-1/2 flex -translate-x-1/2 transform items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] justify-center border border-white rounded-full  text-white "
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 "  />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center border border-white rounded-full bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelSlider

