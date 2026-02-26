import React from 'react';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  return (
    <motion.h1
      className="text-4xl font-bold text-center mb-12 text-[#D2AF34]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      اتصل بنا
    </motion.h1>
  );
};

export default HeaderSection;
