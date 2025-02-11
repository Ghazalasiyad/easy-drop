import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Iqbal",
    position: "CEO - Ideometrix",
    message:
      "Easy Drop ensures my kids' safety with reliable pick-and-drop services and polite drivers. Highly recommended for parents!",
    avatar: "/src/assets/Slider_Image.png",
  },
  {
    id: 2,
    name: "Waqar",
    position: "Head - School",
    message:
      "Easy Drop is the perfect solution for college students! Affordable, punctual, and always reliable. It makes daily commuting hassle-free and convenient.",
    avatar: "/src/assets/Slider_Image.png",
  },
  {
    id: 3,
    name: "Aalam Khan",
    position: "Head - Drivers",
    message:
      "Professional drivers and well-maintained vehicles make Easy Drop perfect for office commutes and travel tours alike!",
    avatar: "/src/assets/Slider_Image.png",
  },
  {
    id: 4,
    name: "Sarah Ali",
    position: "Teacher",
    message:
      "Excellent service! The drivers are always on time, and the vehicles are comfortable and clean. Highly reliable!",
    avatar: "/src/assets/Slider_Image.png",
  },
];

const TestimonialsSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };
  const handleNext = () => (sliderRef.current as any).slickNext();
  const handlePrev = () => (sliderRef.current as any).slickPrev();

  return (
    <div className="w-full bg-[#FFFFFF] py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          What <span className="text-[#2E2C80]">Our Customers</span> Say!
        </h2>
        <p className="mt-4 text-gray-600">
          Real stories from satisfied travelers and daily commuters who trust
          <br /> EasyDrop for seamless journeys and unforgettable experiences.
        </p>
      </div>
      <div className="mt-12 max-w-screen-lg mx-auto relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-2 md:p-4">
              <div className="bg-white border-t-4 border-[#2E2C80] rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105">
                <p className="text-gray-700 italic mb-6">"{testimonial.message}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-[#2E2C80] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-[#2E2C80] text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none shadow-md"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
