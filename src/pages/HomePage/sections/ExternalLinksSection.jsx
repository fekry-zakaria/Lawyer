import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Slider from "react-slick";

const ExternalLinksSection = () => {
  const externalLinks = [
  {
    name: "نقابة المحامين المصرية",
    url: "https://egyls.com",
    image: "https://res.cloudinary.com/doryabvem/image/upload/v1772238296/bar-logo1-copy_tmszxc.png",
  },
  {
    name: "البوابة القانونية للأنظمة",
    url: "https://laws.moj.gov.sa/ar",
    image: "https://res.cloudinary.com/doryabvem/image/upload/v1772238296/download_hwyelq.png",
  },
  {
    name: "موسوعة العدالة القانونية",
    url: "https://eladalah.com/Account/Login",
    image: "https://res.cloudinary.com/doryabvem/image/upload/v1772238296/logo_c2jfxt.png",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  centerMode: false,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "24px"
    },
  },
],
};



  return (
    <section className="py-10 relative z-10 px-4 sm:px-6">
      <motion.div
        className="max-w-5xl mx-auto px-2 sm:px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#D2AF34] mb-4 sm:mb-6">
          روابط قانونية مهمة
        </h2>
        <h2 className="text-center text-base sm:text-xl font-bold text-white mb-6 sm:mb-8">
          وصول سريع لأهم الجهات والمنصات القانونية
        </h2>

        <Slider {...settings}>
          {externalLinks.map((link, index) => (
            <div key={index} className="px-2 sm:px-4 py-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#D2AF34] border border-gray-700 rounded-xl p-4 sm:p-6 text-center hover:border-[#D2AF34] transition-all duration-300 hover:scale-105"
              >
                <div className="w-full h-32 sm:h-40 md:h-30 mx-auto mb-4 bg-white rounded-xl overflow-hidden flex items-center justify-center p-3 sm:p-4">
                  <img
                    className="w-full h-full object-contain"
                    src={link.image}
                    alt={link.name}
                    loading="lazy"
                  />
                </div>
                <p className="text-[#171616] font-semibold text-sm sm:text-base leading-snug">
                  {link.name}
                </p>
                <div className="flex items-center justify-center mt-3 text-[#171616]">
                  <FiExternalLink size={18} />
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default ExternalLinksSection;
