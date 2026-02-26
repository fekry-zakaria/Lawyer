import React from 'react';
import { motion } from 'framer-motion';

const QuickLinksSection = () => {
  return (
    <motion.div
      className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="bg-[#171616] rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">روابط سريعة</h3>
        <div className="space-y-2">
          <a href="/services" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            خدماتنا
          </a>
          <a href="/about" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            من نحن
          </a>
          <a href="/legal-systems" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            الأنظمة واللوائح
          </a>
        </div>
      </div>

      <div className="bg-[#171616] rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">تواصل معنا</h3>
        <div className="space-y-2">
          <a href="tel:+966566336181" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            +966566336181
          </a>
          <a href="tel:+201117586879" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            +201117586879
          </a>
          <a href="mailto:info@example.com" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            info@example.com
          </a>
        </div>
      </div>

      <div className="bg-[#171616] rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">خدمات إضافية</h3>
        <div className="space-y-2">
          <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            الأسئلة الشائعة
          </a>
          <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            المدونة القانونية
          </a>
          <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">
            النشرات الإخبارية
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickLinksSection;
