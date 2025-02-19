import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-white">
      <footer className="container mx-auto py-10 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn}>
            <div className="mb-4">
              <img
                src="/src/assets/footerLogo.png"
                alt="Easy Drop Travel Logo"
                className="h-10 w-auto"
              />
            </div>
            <h4 className="font-medium mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                <FaFacebookF className="text-[#2458A4]" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                <FaInstagram className="text-[#2458A4]" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                <FaLinkedinIn className="text-[#2458A4]" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4">Our Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Gilgit</a></li>
              <li><a href="#" className="hover:text-gray-300">Hunza</a></li>
              <li><a href="#" className="hover:text-gray-300">Skardu</a></li>
              <li><a href="#" className="hover:text-gray-300">Fairy Meadows</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4">Our Activities</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Pick & Drop Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Travel & Tour Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Drivers</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-300">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><span>+92-355437521</span></li>
              <li><span>ux.waqar@gmail.com</span></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 pt-4 text-center text-sm border-t border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          © 2025 EasyDrop. All Rights Reserved.
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
