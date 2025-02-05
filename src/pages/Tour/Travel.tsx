import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Tabs from "../../components/Tabs/Tabs"
import Form from "../../components/Form/Form"

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
    image: "/images/background.jpg",
  },
  {
    title: ["Explore", "the World"],
    description:
      "Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences. From serene beaches to bustling cities, we've got you covered.",
    image: "/images/background.jpg",
  },
  {
    title: ["Travel", "Worry-Free"],
    description:
      "Let us handle the details while you focus on enjoying your journey. Our comprehensive travel packages ensure a smooth and stress-free experience from start to finish.",
    image: "/images/background.jpg",
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
    <div className="relative  w-full overflow-hidden">
      {/* Slide */}
      <div className="relative h-[100vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 ml-30 flex h-full flex-col justify-center px-6 md:px-16 lg:px-24">
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
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] justify-center border border-white rounded-full text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 " />
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

      <Tabs />

      <section className="py-16 px-4 md:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="mb-12">
      <h2 className="text-4xl font-semibold mb-4 text-center">
        Recent{" "}
        <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">Gallery</span>
      </h2>
      <p className="text-[#666666] text-lg font-normal leading-[30px] text-center max-w-3xl mx-auto">
        From serene valleys to majestic mountains, every trip is crafted with your comfort and exploration in mind.
        Let us handle the logistics while you create memories that last a lifetime. Start your adventure today!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Large Featured Image - Hunza Baltit Fort */}
      
      <div className="relative rounded-2xl overflow-hidden md:col-span-2 row-span-2">
        <img
          src="/images/baltit.png"
          alt="Hunza Baltit Fort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">Hunza Baltit Fort</h3>
        </div>
      </div>
      
      {/* Deosai Lake */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/deosai.png"
          alt="Deosai Lake"
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">Deosai Lake</h3>
        </div>
      </div>
       {/* Skardu */}
       <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/skardu.png"
          alt="Skardu"
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">Skardu</h3>
        </div>
      </div>

      {/* Ghizer Valley */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/ghizer.png"
          alt="Ghizer Valley"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">Ghizer Valley</h3>
        </div>
      </div>

      {/* Gilgit */}
      <div className="relative rounded-2xl overflow-hidden md:col-span-1">
        <img
          src="/images/gilgit.png"
          alt="Gilgit"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">Gilgit</h3>
        </div>
      </div>

     

      {/* Rakhaposhi */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/images/rakaposhi.png"
          alt="Rakhaposhi"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">Rakhaposhi</h3>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <button className="rounded-md bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] hover:opacity-90 transition-opacity">
        Explore Now
      </button>
    </div>
  </div>
</section>
<section>
  <Form/>
</section>




    </div>
  )
}

export default TravelSlider
