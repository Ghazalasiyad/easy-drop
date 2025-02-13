import Hero from "../../assets/hero.png";
import scndSection from "../../assets/SecondSection.png";
import CardList from "../../components/cards/cardList";
import SectionForth from "../../assets/sectionFourth.png"
import CounterList from "../../counters/CounterList";
import TravelTour from "../../components/GalleryBook/TravelTour";
import Driver from "../../Drivers/Driver";
import Testimonials from "../../components/SliderComp/Testimonials";
import ContactForm from '../../components/contactform/ContactForm';
import Footer from '../../components/Footer/Footer';
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      {/* First Section Start */}
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] flex justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="container w-full max-w-[1920px] lg:h-[730px] flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-[1477.68px] text-center lg:text-left gap-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-snug"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <span className="text-gray-800">Seamless </span>
                <span className="text-[#37439D]">Rides</span>
                <span className="text-gray-800">, </span>
                <br className="hidden lg:block" />
                <span className="text-gray-800">Memorable</span>
                <br />
                <span className="text-gray-800">Adventures</span>
              </motion.h1>

              <motion.p
                className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From Daily Pick-And-Drop Services To Tailored Travel Experiences, We've Got You Covered
              </motion.p>

              <motion.button
                className="w-[120px] sm:w-[134px] h-[45px] sm:h-[47px] rounded-md text-base sm:text-lg font-medium text-white transition-colors duration-200 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <img
                src={Hero}
                alt="Easy Drop Fleet"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[835.68px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>


      {/* First Section End */}

      {/* Second Section Start */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Who <span className="text-[#2E2C80]">We Are</span>
            </motion.h1>

            <motion.p
              className="text-gray-800 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At EasyDrop, we provide reliable pick-and-drop services<br /> and unforgettable travel
              experiences. With a focus on<br /> safety and convenience, our professional team ensures <br />
              timely commutes and scenic tours to breathtaking<br /> destinations like Gilgit-Baltistan.
              EasyDrop is your trusted<br /> partner for seamless transportation and memorable<br /> adventures.
            </motion.p>

            <motion.button
              className="w-[134px] h-[47px] rounded-[8px] text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img src={scndSection} className="max-w-full h-auto object-cover" alt="EasyDrop Services" />
          </motion.div>
        </div>
      </div>

      {/* Second Section End */}

      <div>
        <CardList />
      </div>

      {/* Fourth Section Start */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              <span className="text-[#2E2C80]">Pick & Drop</span> Service
            </h1>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12">
              <span className="text-[#2E2C80] font-bold">Easydrop</span> ensures safe, reliable transportation for students <br />
              and professionals. Affordable monthly plans designed for <br /> convenience and flexibility. Sign up online with ease
              and <br /> customize your schedule effortlessly. Experience smooth, <br /> stress-free commutes tailored to your routine.
            </p>
            <button className="w-[120px] sm:w-[134px] h-[45px] sm:h-[47px] rounded-md text-base sm:text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]">
              Subscribe
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <img src={SectionForth} className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[559px] h-auto object-contain" alt="Pick & Drop Service" />
          </motion.div>
        </div>
      </div>

      {/* Fourth Section End */}

      <div>
        <CounterList />
      </div>

      <div>
        <TravelTour />
      </div>

      <div>
        <Driver />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <ContactForm />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
