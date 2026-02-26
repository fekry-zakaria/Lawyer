import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <div className="px-6 py-16 text-center relative z-10">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <h3 className="text-4xl font-bold mb-6 text-yellow-400">خبرة في المحاماة أكثر من 14 عام</h3>
        <p className="text-xl text-gray-300 leading-relaxed">
          نقدم لكم خبرة قانونية ممتدة في كافة المجالات القانونية
          بالسعودية ومصر، مع فريق من المحامين المتخصصين
        </p>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;
