import Hero from "../../assets/hero.png";

export default function Home() {
  return (
    <div className="w-full h-[846px] bg-gradient-to-r from-white to-blue-50 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1920px] h-full flex justify-center items-center">
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
  );
}
