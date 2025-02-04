import Hero from "../../assets/hero.png";
import scndSection from "../../assets/SecondSection.png";
import CardList from "../../components/cards/cardList";
import SectionForth from "../../assets/sectionFourth.png"
import CounterList from "../../counters/CounterList";
import TravelTour from "../../components/GalleryBook/TravelTour";
import Driver from "../../Drivers/Driver";


export default function Home() {
  return (
    <>
      {/* First Section Start */}
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="container w-full max-w-[1920px] h-[846px] flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-[1477.68px] text-center lg:text-left py-12 sm:py-16 lg:py-0">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-800">Seamless </span>
                <span className="text-[#37439D]">Rides</span>
                <span className="text-gray-800">, </span>
                <br className="hidden lg:block" />
                <span className="text-gray-800">Memorable</span>
                <br />
                <span className="text-gray-800">Adventures</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
                From Daily Pick-And-Drop Services To Tailored Travel Experiences, We've Got You Covered
              </p>
              <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white
               transition-colors duration-200 bg-gradient-to-r from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683]">
                Contact Us
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src={Hero}
                alt="Easy Drop Fleet"
                className="w-full max-w-[835.68px] sm:max-w-[600px] md:max-w-[500px] lg:max-w-[835.68px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* First Section End */}

      {/* Third Section Start */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-6">
              Who <span className="text-[#2E2C80]">We Are</span>
            </h1>
            <p className="text-gray-800 mb-12 leading-relaxed">
              At EasyDrop, we provide reliable pick-and-drop services<br></br> and unforgettable
              travel experiences. With a focus on<br></br> safety and convenience, our professional
              team ensures <br></br>timely commutes and scenic tours to breathtaking<br></br> destinations
              like Gilgit-Baltistan. EasyDrop is your trusted<br></br> partner for seamless
              transportation and memorable<br></br> adventures.
            </p>
            <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
              Lerarn More
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={scndSection} className="max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Third Section End */}
      <div>
        <CardList />
      </div>

      {/* Fourth Section Start */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold mb-6">
              <span className="text-[#2E2C80]">Pick & Drop</span> Service
            </h1>
            <p className="text-gray-800 mb-12 leading-relaxed">
              <span className="text-[#2E2C80] font-bold">Easydrop</span>
              ensures safe, reliable transportation for students<br></br> and professionals.
              Affordable monthly plans designed for<br></br> convenience and flexibility.
              Sign up online with ease and <br></br>customize your schedule effortlessly.
              Experience smooth,<br></br>stress-free commutes tailored to your routine.
            </p>
            <button className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
              Subscribe
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={SectionForth} className="w-[559px] h-[529px]" />
          </div>
        </div>
      </div>
      {/* Fourth Section End */}

      <div>
        <CounterList />
      </div>
      <div>
        <TravelTour />
      </div>

      {/* Sixth Section Start */}
    <Driver />
      {/* Sixth Section End */}
    </>
  );
}
