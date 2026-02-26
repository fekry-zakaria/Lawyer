import React from 'react';
import { motion } from 'framer-motion';
import { FiFile, FiAward } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';

const LegalDocumentsSection = () => {
  return (
    <div className="px-6 py-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-yellow-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          اللوائح والنماذج القانونية
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FiFile, title: 'عقود تجارية', desc: 'نماذج عقود تجارية جاهزة' },
            { icon: FaBalanceScale, title: 'لوائح قانونية', desc: 'مجموعة اللوائح والأنظمة' },
            { icon: FiAward, title: 'سوابق قضائية', desc: 'أهم الأحكام القضائية' },
            { icon: FiFile, title: 'استشارات سابقة', desc: 'نماذج استشارات قانونية' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors border border-gray-800"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-[#D2AF34] mb-3" size={32} />
              <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsSection;
