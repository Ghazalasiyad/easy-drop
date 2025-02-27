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
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] flex justify-center items-center">
        <div className="container max-w-screen-[1920px] h-auto pt-45 sm:pt-28 md:pt-36 lg:pt-60 pb-10 sm:pb-16 lg:pb-20 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full text-center md:text-left gap-6 sm:gap-8">
            <motion.div
              className="space-y-4 sm:space-y-6 px-4 sm:px-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug text-start"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <span className="text-gray-800">Seamless </span>
                <span className="font-bold bg-gradient-to-b from-[#2E2C80] to-[#2458A4] 
            text-transparent bg-clip-text">Rides,</span>
                <br className="hidden md:block" />
                <span className="text-gray-800">Memorable</span>
                <br />
                <span className="text-gray-800">Adventures</span>
              </motion.h1>

              <motion.p
                className="text-gray-600 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From Daily Pick-And-Drop Services To Tailored Travel Experiences, We've Got You Covered
              </motion.p>
              <motion.button
                className="w-full sm:w-[130px] h-[40px] sm:h-[45px] rounded-md text-sm sm:text-base font-medium text-white transition-colors duration-200 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683] cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
            <motion.div
              className="flex justify-center px-4 sm:px-8"
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <img
                src={Hero}
                alt="Easy Drop Fleet"
                className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* First Section End */}

      {/* Second Section Start */}
      <section>
        <div className="container mx-auto max-w-screen-[1920px] flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl font-bold lg:mb-6 sm:mb-2 text-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Who <span className="text-[#2E2C80]">We Are</span>
            </motion.h1>

            <motion.p
              className="max-w-[500px] text-gray-800 mb-12 leading-relaxed text-sm sm:text-base md:text-lg text-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At EasyDrop, we provide reliable pick-and-drop services and unforgettable travel
              experiences. With a focus on safety and convenience, our professional team ensures
              timely commutes and scenic tours to breathtaking destinations like Gilgit-Baltistan.
              EasyDrop is your trusted partner for seamless transportation and memorable adventures.
            </motion.p>

            <motion.button
              className="w-full sm:w-[130px] h-[47px] rounded-lg text-sm sm:text-base font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] cursor-pointer"
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
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img src={scndSection} className="max-w-full h-auto object-cover" alt="EasyDrop Services" />
          </motion.div>
        </div>
      </section>
      {/* Second Section End */}

      <div>
        <CardList />
      </div>

      {/* Fourth Section Start */}
      <section>
        <div className="container mx-auto max-w-screen-[1920px] flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 lg:py-30">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              <span className="text-[#2E2C80]">Pick & Drop</span> Service
            </h1>
            <p className="max-w-[500px] text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
              <span className="text-[#2E2C80] font-bold">Easydrop</span> ensures safe, reliable transportation for students
              and professionals. Affordable monthly plans designed for convenience and flexibility. Sign up online with ease
              and customize your schedule effortlessly. Experience smooth, stress-free commutes tailored to your routine.
            </p>
            <button className="w-full sm:w-[130px] h-[45px] sm:h-[47px] rounded-md text-base sm:text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] cursor-pointer">
              Subscribe
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img src={SectionForth} className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[559px] h-auto object-contain" alt="Pick & Drop Service" />
          </motion.div>
        </div>
      </section>
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
