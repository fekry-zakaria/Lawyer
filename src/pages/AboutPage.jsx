import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiAward, FiBookOpen, FiGlobe, FiPhone, FiMail, FiCalendar } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
     {/* Background Subtle Lines */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {/* Base Dark Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C0C] via-[#120F0F] to-[#0D0C0C]" />

  {/* Diagonal Gold Lines */}
  <div
    className="absolute inset-0 opacity-[0.07]"
    style={{
      backgroundImage: `
        repeating-linear-gradient(
          -45deg,
          transparent 0px,
          transparent 140px,
          rgba(210,175,52,0.8) 140px,
          rgba(210,175,52,0.8) 142px
        )

        
      `,
    }}
  />

  {/* Extra Thin Accent Lines (زي اللي على اليمين في الصورة) */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(
          to bottom,
          transparent 0%,
          rgba(210,175,52,0.7) 50%,
          transparent 100%
        )
      `,
      backgroundSize: "1px 100%",
      backgroundPosition: "85% 0",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Soft Gold Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#D2AF34] opacity-5 blur-3xl rounded-full" />
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D2AF34] opacity-5 blur-3xl rounded-full" />
  </div>
</div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-center mb-12 text-white"
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
            <h2 className="text-2xl font-bold mb-6 text-[#D2AF34] flex items-center">
              <FiUser className="ml-3" size={28} />
              المعلومات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <FiUser className="text-[#D2AF34]" size={30} />
                <div className='px-3'>
                  <p className="text-sm text-white">الاسم</p>
                  <p className="text-lg text-white">محمد مصطفى محمد عبد الواحد</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FiCalendar className="text-[#D2AF34]" size={30} />
                <div className='px-3'>
                  <p className="text-sm text-white">تاريخ الميلاد</p>
                  <p className="text-lg text-white">1 يناير 1985</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FiGlobe className="text-[#D2AF34]" size={30} />
                <div className='px-3'>
                  <p className="text-sm text-white">الجنسية</p>
                  <p className="text-lg text-white">مصري</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FiPhone className="text-[#D2AF34]" size={30} />
                <div className='px-3'>
                  <p className="text-sm text-white">أرقام التواصل</p>
                  <p className="text-lg text-white">00201117586879 – 00966566336181</p>
                </div>
              </div>
            </div>
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
                <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  محامي حر - مصر
                </span>
                <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  مستشار قانوني - السعودية
                </span>
                <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  درجة القيد: استئناف
                </span>
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
              <div className="bg-[#D2AF34] text-black px-6 py-3 rounded-lg font-semibold">
                عضو نقابة المحامين المصرية
              </div>
              <div className="bg-[#D2AF34] text-black px-6 py-3 rounded-lg font-semibold">
                عضو اتحاد المحامين العرب
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
