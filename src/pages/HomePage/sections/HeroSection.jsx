import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../../../components/ImageSlider';

const HeroSection = () => {
  return (
    <>
      <ImageSlider />
      <motion.div
        className="bg-[#D2AF34] bg-opacity-20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto mb-12 border border-[#D2AF34] border-opacity-30 mt-16 md:mt-46"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className=" text-sm md:text-lg mb-4 text-white">تحت إشراف المستشار القانوني محمد مصطفى</p>
        <p className="text-lg md:text-xl font-semibold text-gray-200">محام ومستشار قانوني – عضو اتحاد المحامين العرب</p>
        <div className="mt-4 space-y-2 text-white">
          <p>مصر: +201117586879</p>
          <p>السعودية: +966566336181</p>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
