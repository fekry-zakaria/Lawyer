import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi';

const InfoSection = () => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {/* Quick Contact */}
      <motion.div
        className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#D2AF34]">معلومات التواصل</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-[#D2AF34] p-3 rounded-full">
              <FiPhone className="text-black" size={20} />
            </div>
            <div className="px-3">
              <p className="text-sm text-gray-400">الهاتف</p>
              <p className="font-semibold text-white">0566336181</p>
              <p className="font-semibold text-white">01117586879</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-[#D2AF34] p-3 rounded-full">
              <FiMail className="text-black" size={20} />
            </div>
            <div className="px-3">
              <p className="text-sm text-gray-400">البريد الإلكتروني</p>
              <p className="font-semibold text-white">mohamedmostafa124@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="bg-[#D2AF34] p-3 rounded-full">
              <FiMapPin className="text-black" size={20} />
            </div>
            <div className="px-3">
              <p className="text-sm text-gray-400">المقر الرئيسي</p>
              <p className="font-semibold text-white">الرياض، المملكة العربية السعودية</p>
              <p className="font-semibold text-white">القاهرة، جمهورية مصر العربية</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Working Hours */}
      <motion.div
        className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-[#D2AF34] ">ساعات العمل</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse text-white">
              <FiClock className="text-[#D2AF34]" size={20} />
              <span className="px-2">الأحد - الخميس</span>
            </div>
            <span className="font-semibold text-white">9:00 ص - 6:00 م</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse text-white">
              <FiClock className="text-[#D2AF34]" size={20} />
              <span className="px-2">السبت</span>
            </div>
            <span className="font-semibold text-white">10:00 ص - 2:00 م</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">خدمات سريعة</h2>
        <div className="space-y-4">
          <button className="w-full bg-[#D2AF34] text-black py-3 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse">
            <FiMessageCircle size={20} />
            <span>استشارة فورية عبر الواتساب</span>
          </button>
          <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold">
            حجز موعد
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InfoSection;
