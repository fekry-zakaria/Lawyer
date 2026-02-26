import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Slider from "react-slick";
const ExternalLinksSection = () => {
  const externalLinks = [
  {
    name: "نقابة المحامين المصرية",
    url: "https://egyls.com",
  },
  {
    name: "البوابة القانونية للأنظمة والتشريعات السعودية",
    url: "https://laws.moj.gov.sa/ar",
  },
  {
    name: "موسوعة العدالة القانونية",
    url: "https://eladalah.com/Account/Login",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



  return (
    <section className="py-10 relative z-10 px-6">
  

  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-center text-4xl font-bold text-[#D2AF34] mb-8">
    روابط قانونية مهمة
  </h2>
   <h2 className="text-center text-xl font-bold text-white mb-8">
وصول سريع لأهم الجهات والمنصات القانونية
  </h2>
 
    <Slider {...settings}>
      {externalLinks.map((link, index) => (
        <div key={index} className="px-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#D2AF34] border border-gray-700 rounded-xl p-6 text-center hover:border-[#D2AF34] transition-all duration-300 hover:scale-105"
          >
            <p className="text-[#171616] font-semibold">
              {link.name}
            </p>
          </a>
        </div>
      ))}
    </Slider>
  </div>
</section>
  );
};

export default ExternalLinksSection;
