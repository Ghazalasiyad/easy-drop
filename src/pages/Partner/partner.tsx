// import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import Car from "../../../public/icons/Car.png";
import ExpertDriversCard from "../../components/ExpertDrivers/ExpertDriversCard";
import { ExpertDriversData } from "../../components/ExpertDrivers/ExpertDriversData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ArrowRight } from "react-feather";
import { Navigation } from "swiper/modules";
import PartnerCard from "../../components/PartnerSlider/PartnerCard";
import { PartnerData } from "../../components/PartnerSlider/PartnerData";
import DriverForm from "../../components/Form/DriverForm";
import { motion } from "framer-motion";
import caar from "../../assets/Images/caar.png"
import vector from "../../assets/Images/vector.png"
import register from "../../assets/Images/register.png"
import boy from "../../assets/Images/boy.png"
import contact from "../../assets/Images/contact.png"
import hours from "../../assets/Images/hours.png"
import support from "../../assets/Images/support.png"
import paid from "../../assets/Images/paid.png"
import groupcar from "../../assets/Images/groupcar.png"
import pace from "../../assets/Images/pace.png"
import sides from "../../assets/Images/sides.png"
import anywhere from "../../assets/Images/anywhere.png"
import Footer from '../../components/Footer/Footer';

interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

const benefits: BenefitCard[] = [
  {
    title: "Flexible Work Hours",
    description:
      "Choose your own schedule, allowing you to balance work and personal life while maximizing your earnings.",
    icon: Car,
  },
  {
    title: "Attractive Earnings",
    description:
      "Ensuring safety, punctuality, and comfort with professional drivers and well-maintained vehicles",
    icon: Car,
  },
  {
    title: "Maintenance Support",
    description:
      "Choose your own schedule, allowing you to balance work and personal life while maximizing your earnings.",
    icon: Car,
  },
  {
    title: "Secure Payments",
    description:
      "Receive prompt, reliable, and timely payments for every completed trip, ensuring peace of mind.",
    icon: Car,
  },
];
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
    
  }),
};
const Partner = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] h-[700px]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="pl-[5%] sm:pl-[10%] mx-auto h-auto sm:h-[640px] max-w-[1485px] flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-6 lg:mb-0"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Add your car <br />
                and{" "}
                <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                  Start
                </span>{" "}
                <br />
                <span className="text-[#2E2C80]"> earning </span> with Us
              </motion.h1>

              <motion.p
                className="font-normal text-base sm:text-lg text-[#666666] leading-6 sm:leading-[26px] mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From daily pick-and-drop services to tailored{" "}
                <br className="hidden sm:block" /> travel experiences, we’ve got
                you covered
              </motion.p>

              <button className="mt-6 w-[150px] sm:w-[170px] h-[45px] sm:h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
                Be a Partner
              </button>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.8, duration: 1 }}
              variants={imageVariants}
            >
              <img
                src={caar}
                className="w-[90%] sm:w-[682px] h-auto sm:h-[357px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
      ;{/* Partner section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            // animate="visible"
            whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <motion.h2
              className="text-[38px] leading-[60px] font-normal mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Here's What You Need{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text text-[38px] font-bold">
                To A Partner
              </span>
            </motion.h2>
            <motion.p
              className="text-[#666666] font-normal text-base leading-[26px] max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Reliability, Trust, And Commitment To Excellence. At Easy Drop, We
              Pride Ourselves On Delivering Safe, Punctual, And <br/> Hassle-Free
              Pick-And-Drop Services Tailored To Your Needs. Whether For
              Students, Schools, Or Businesses,
              <br />
              We're Your Dependable Partner For Seamless Daily Commuting.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Register Card */}
            <motion.div
              className="text-center p-6"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={0}
            >
              <div className="mb-10 relative mt-3">
                <img
                  src={vector}
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[206px] h-[163px]"
                  aria-hidden="true"
                />
                <img
                  src={register}
                  alt="Register your car"
                  className="relative z-10 w-[195px] h-[130px] mx-auto"
                />
              </div>
              <h3 className="text-2xl font-normal leadin-[36px] mb-3">
                Register{" "}
                <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                  Your Car
                </span>
              </h3>
              <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
                Partner with us and add your car to <br /> provide safe,
                reliable and hassle-
                <br />
                free commuting services.
              </p>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="text-center p-6"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={1}
            >
              <div className="mb-6 relative">
                <img
                  src={vector}
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[160px]"
                  aria-hidden="true"
                />
                <img
                  src={boy}
                  alt="Contact us"
                  className="relative z-10 w-[109px] h-[159px] mx-auto"
                />
              </div>
              <h3 className="text-2xl font-normal leading-[36px] mb-3">
                Contact{" "}
                <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                  With US
                </span>
              </h3>
              <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
                Get in touch with us for safe, reliable,
                <br /> and hassle-free commuting <br /> solutions.
              </p>
            </motion.div>

            {/* Drive Card */}
            <motion.div
              className="text-center p-6"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={2}
            >
              <div className="mb-6 relative">
                <img
                  src={vector}
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[203px] h-[160px]"
                  aria-hidden="true"
                />
                <img
                  src={contact}
                  alt="Drive with us"
                  className="relative z-10 w-[109px] h-[159px] mx-auto"
                />
              </div>
              <h3 className="text-2xl font-normal leading-[36px] mb-3">
                Drive{" "}
                <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                  With Us
                </span>
              </h3>
              <p className="font-normal text-xs leading-[18px] text-center text-[#84878B]">
                Join our team and drive with <br /> us to provide safe and
                reliable <br /> commuting services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      ;
     {/* Partner slider */}
      <section className="w-full bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 2xl:px-48">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1280: { slidesPerView: 3 },
                1380: { slidesPerView: 2 },
                1480: { slidesPerView: 2 },
              }}
              className="!pb-10"
            >
              {PartnerData.map((review, index) => (
                <SwiperSlide key={index}>
                  <PartnerCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div> 
          <motion.div
            className="flex border-b border-[#c1d0e5] justify-between mt-0 mb-5 ml-6 relative h-[85px] w-[560px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            // viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl font-bold leading-[44px] bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent  bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              // viewport={{ once: true }}
            >
             Be A Partner With Us
            </motion.h2>
            <div className="flex gap-[100px] justify-between">
              <motion.button
                className="next-button w-9 h-9 rounded-full flex mx-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
              >
                <ArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-[1186px] h-[650px] mx-auto">
        {/* Easy Drop Text */}
        <div className="text-center mb-4">
          <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-medium text-lg leading-[18px]">
            Easy Drop
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[28px] md:text-[38px] font-normal leading-[40px] md:leading-[60px] mb-12 md:mb-16"
        >
          Your Road To{" "}
          <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">
            Safe And Reliable
          </span>{" "}
          Commutes
        </motion.h2>

        {/* Features Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between relative space-y-8 md:space-y-0"
        >
          {/* Left Column */}
          <div className="flex-1 space-y-8 md:max-w-[340px] w-full md:w-auto px-4 md:px-0">
            {[
              {
                img: hours,
                title: "Set Your Own Hours",
                desc: "Enjoy flexibility and freedom by setting your own hours with EasyDrop.",
              },
              {
                img: paid,
                title: "Get Paid Fast",
                desc: "Earn securely and get paid quickly with our reliable payment system.",
              },
              {
                img: support,
                title: "Get Support At Every Time",
                desc: "Receive 24/7 support to ensure a seamless and hassle-free experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-4"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[30px] h-[30px] flex-shrink-0"
                />
                <div>
                  <h3 className="font-normal text-lg md:text-xl leading-[24px] md:leading-[30px] mb-1">
                    {item.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">
                      {item.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </h3>
                  <p className="text-[#2D2D2D] font-normal text-sm md:text-base leading-[24px] md:leading-[27px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Car Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative flex justify-center w-full md:w-auto"
          >
            <img
              src={groupcar}
              alt="Car illustration"
              className="w-[79px] h-[395px] md:h-[495px]"
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex-1 space-y-8 md:max-w-[340px] w-full md:w-auto px-4 md:px-0">
            {[
              {
                img: pace,
                title: "Onboard People At Your Own Pace",
                desc: "Onboard people effortlessly and at your own pace with complete flexibility.",
              },
              {
                img: sides,
                title: "Safe Rides, Reliable Service",
                desc: "Enjoy safe rides and reliable service every time you travel with us.",
              },
              {
                img: anywhere,
                title: "Go Anywhere With Easy Drop",
                desc: "Travel anywhere with ease and reliability, only with Easy Drop.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-4"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[30px] h-[30px] flex-shrink-0"
                />
                <div>
                  <h3 className="font-normal text-lg md:text-xl leading-[24px] md:leading-[30px] mb-1">
                    {item.title.split(" ").slice(0, -2).join(" ")}{" "}
                    <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text font-semibold">
                      {item.title.split(" ").slice(-2).join(" ")}
                    </span>
                  </h3>
                  <p className="text-[#2D2D2D] font-normal text-sm md:text-base leading-[24px] md:leading-[27px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      ;{/* Why drive with us section  */}
      <section className="py-16 bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] mt-[10%]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 mt-10"
          >
            <h2 className="text-[38px] md:text-4xl font-semibold leading-[40px] mb-4">
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Why drive
              </span>
              <span> with us ?</span>
            </h2>
            <p className="text-[#666666] font-normal text-xl leading-[26px] max-w-3xl mx-auto">
              Drive with Easy Drop for flexible hours, attractive earnings, and
              the opportunity to grow your business. Enjoy regular vehicle
              maintenance support and secure, timely payments for every trip.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-[334px] h-auto mx-auto"
              >
                <div className="w-[52px] h-[63px] rounded-lg flex items-center justify-center mb-4">
                  <img src={benefit.icon} alt="" />
                </div>
                <h3 className="text-xl font-medium mb-3 leading-[25px] text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-[#666666] font-normal text-sm leading-[21px] mt-8">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Expert Drivers Section */}
      <section className="w-full h-[848px] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-28"
          >
            <h2 className="text-[38px] font-semibold leading-[42px]">
              Our{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Expert
              </span>{" "}
              Drivers
            </h2>
            <p className="text-[#59636A] text-lg leading-[26px] font-normal md:text-xl font-urbanist mt-4 max-w-3xl mx-auto">
              Our expert drivers are the backbone of Easy Drop, dedicated to
              providing safe, reliable, and punctual transportation services.
              With extensive experience and a commitment to customer
              satisfaction, they ensure every ride is a smooth and hassle-free
              experience for our passengers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass:
                  "swiper-pagination-bullet-active bg-[#B11A28]",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2,
                },
                1380: {
                  slidesPerView: 2,
                },
                1480: {
                  slidesPerView: 4,
                },
              }}
              className="!pb-24"
            >
              {ExpertDriversData.map((feature, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <ExpertDriversCard {...feature} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
      <div className="mt-10">
        <DriverForm />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Partner;
