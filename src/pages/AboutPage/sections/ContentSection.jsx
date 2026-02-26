import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiAward, FiBookOpen, FiGlobe, FiPhone, FiCalendar } from 'react-icons/fi';
import profile from '../../../assets/lawyer.jpeg';

const ContentSection = () => {
  return (
    <div className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-lg md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          السيرة الذاتية للمستشار محمد مصطفى
        </motion.h1>

        {/* Personal Information */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* صورة البروفايل */}
 <div className="flex-shrink-0 relative flex justify-center">
  <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#D2AF34] to-yellow-600 rounded-full blur-3xl opacity-20"></div>

  <img
    src={profile}
    alt="Profile"
    className="w-64 h-64 object-cover rounded-full border-4 border-[#D2AF34] shadow-2xl relative"
  />
</div>
            {/* المعلومات الشخصية */}
            <div className="flex-1 w-full">
              <h2 className="text-lg md:text-2xl font-bold mb-6 text-[#D2AF34] flex items-center gap-2">
                <FiUser size={28} />
                المعلومات الشخصية
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الاسم */}
                <div className="flex items-center gap-3">
                  <FiUser className="text-[#D2AF34]" size={28} />
                  <div>
                    <p className="text-sm text-gray-300">الاسم</p>
                    <p className="text-sm md:text-lg font-semibold text-white">محمد مصطفى محمد عبد الواحد</p>
                  </div>
                </div>

                {/* تاريخ الميلاد */}
                <div className="flex items-center gap-3">
                  <FiCalendar className="text-[#D2AF34]" size={28} />
                  <div>
                    <p className="text-sm text-gray-300">تاريخ الميلاد</p>
                    <p className="text-sm md:text-lg font-semibold text-white">1 يناير 1985</p>
                  </div>
                </div>

                {/* الجنسية */}
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-[#D2AF34]" size={28} />
                  <div>
                    <p className="text-sm text-gray-300">الجنسية</p>
                    <p className="text-sm md:text-lg font-semibold text-white">مصري</p>
                  </div>
                </div>

                {/* أرقام التواصل */}
                <div className="flex items-center gap-3">
                  <FiPhone className="text-[#D2AF34]" size={28} />
                  <div>
                    <p className="text-sm text-gray-300">أرقام التواصل</p>
                    <p className="text-sm md:text-lg font-semibold text-white">00201117586879 – 00966566336181</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 mb-8 mt-4 border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
            <FiBookOpen className="ml-3" size={28} />
            المؤهل العلمي
          </h2>
          <div className="bg-[#0D0C0C] rounded-lg p-6">
            <p className="text-lg text-white">ليسانس الحقوق جامعة عين شمس منذ عام 2011</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">محامي حر - مصر</span>
              <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">مستشار قانوني - السعودية</span>
              <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">درجة القيد: استئناف</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
            <FiBriefcase className="ml-3" size={28} />
            الخبرات العملية
          </h2>
          <div className="space-y-4">
            <div className="bg-[#0D0C0C] rounded-lg p-6 border-r-4 border-[#D2AF34]">
              <h3 className="font-semibold text-lg mb-2 text-white">محامي ومستشار قانوني</h3>
              <p className="text-gray-300">أكثر من 14 عام لدى جمهورية مصر العربية والمملكة العربية السعودية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-6 border-r-4 border-[#D2AF34]">
              <h3 className="font-semibold text-lg mb-2 text-white">محامي بالاستئناف العالي</h3>
              <p className="text-gray-300">مجلس الدولة المصري وخبير لدى المحاكم العسكرية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-6 border-r-4 border-[#D2AF34]">
              <h3 className="font-semibold text-lg mb-2 text-white">مستشار قانوني</h3>
              <p className="text-gray-300">شركة ثقة للمحاماة والاستشارات القانونية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-6 border-r-4 border-[#D2AF34]">
              <h3 className="font-semibold text-lg mb-2 text-white">مستشار قانوني</h3>
              <p className="text-gray-300">مكتب المحامي إبراهيم الأيداء بالرياض</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-6 border-r-4 border-[#D2AF34]">
              <h3 className="font-semibold text-lg mb-2 text-white">مستشار قانوني</h3>
              <p className="text-gray-300">مكتب المحامي حمد المطيري بالمدينة المنورة</p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 mb-8 border border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
            <FiAward className="ml-3" size={28} />
            المهارات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0D0C0C] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#D2AF34]">الاستشارات القانونية</h3>
              <p className="text-sm text-gray-300">تقديم الاستشارات القانونية وإعداد المذكرات واللوائح الاعتراضية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#D2AF34]">القضايا المتخصصة</h3>
              <p className="text-sm text-gray-300">خبير في القضايا الجنائية والتجارية والعمالية والمدنية وقضايا الأحوال الشخصية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#D2AF34]">تأسيس الشركات</h3>
              <p className="text-sm text-gray-300">تأسيس الشركات بكافة أنواعها وإجراءاتها القانونية</p>
            </div>
            <div className="bg-[#0D0C0C] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-[#D2AF34]">صياغة العقود</h3>
              <p className="text-sm text-gray-300">صياغة كافة أنواع العقود والاتفاقيات القانونية</p>
            </div>
          </div>
        </motion.div>

        {/* Memberships */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center">
            <FiGlobe className="ml-3" size={28} />
            العضويات
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#D2AF34] text-black px-6 py-3 rounded-lg font-semibold">عضو نقابة المحامين المصرية</div>
            <div className="bg-[#D2AF34] text-black px-6 py-3 rounded-lg font-semibold">عضو اتحاد المحامين العرب</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;
