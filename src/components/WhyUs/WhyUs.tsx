const WhyChooseUs = () => {
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
            <p className="text-gray-600 mt-2 pl-[4%]">
              At EasyDrop, we prioritize your convenience, safety, and satisfaction.
              Whether it's reliable pick-and-drop <br />services or unforgettable travel
              experiences, we ensure top-notch service tailored to your needs.
            </p>
          </div>
  
          <div className="mt-10 flex justify-center px-10 w-full">
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
              <div className="p-6 bg-white shadow-lg rounded-lg w-[356px] h-[284px]">
                <div className="flex justify-between mb-4">
                  <img src="/images/car.png" alt="Pick & Drop" className="h-10 w-10" />
                  <img src="/images/location.png" alt="Pick & Drop" className="h-10 w-10" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">Pick & Drop</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">
                  Effortless commuting made <br /> simple with our Pick & Drop service,<br />
                  ensuring a comfortable ride to your<br /> destination.
                </p>
              </div>
  
              <div className="p-6 bg-white shadow-lg rounded-lg w-[356px] h-[284px]">
                <div className="flex justify-between mb-4">
                  <img src="/images/car.png" alt="Pick & Drop" className="h-10 w-10" />
                  <img src="/images/location.png" alt="Pick & Drop" className="h-10 w-10" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">Safe & Secure</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">
                  Ensuring safety, punctuality, and comfort with professional
                  drivers and well-maintained vehicles.
                </p>
              </div>
  
              <div className="p-6 bg-white shadow-lg rounded-lg w-[356px] h-[284px]">
                <div className="flex justify-between mb-4">
                  <img src="/images/car.png" alt="Pick & Drop" className="h-10 w-10" />
                  <img src="/images/location.png" alt="Pick & Drop" className="h-10 w-10" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">Anytime Reservation</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">
                  Enjoy the flexibility of making reservations at your convenience
                  with our Anytime Reservation service.
                </p>
              </div>
  
              <div className="p-6 bg-white shadow-lg rounded-lg w-[356px] h-[284px]">
                <div className="flex justify-between mb-4">
                  <img src="/images/car.png" alt="Pick & Drop" className="h-10 w-10" />
                  <img src="/images/location.png" alt="Pick & Drop" className="h-10 w-10" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">Pick & Drop</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">
                  Effortless commuting made simple with our Pick & Drop service,
                  ensuring a comfortable ride to your destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  