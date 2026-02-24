import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiHelpCircle, FiFile, FiUsers, FiAward } from 'react-icons/fi';
import { FaBalanceScale } from "react-icons/fa";
const HomePage = () => {
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

      {/* Hero Section */}
      <div className="relative z-10">
        <motion.div 
          className="px-6 py-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
           أهلا وسهلاً بكم في موقع
          </motion.h1>
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 text-[#D2AF34] leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            المستشار القانوني محمد مصطفى
          </motion.h1>
       
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            نحن نخبة من المحامين والمستشارين القانونيون السعوديين وغير السعوديين 
            نسعد بخدمتكم لتقديم الاستشارات القانونية ودراسة القضايا والترافع في كافة 
            أنواع القضايا وتأسيس الشركات وصياغة العقود واللوائح
          </motion.p>
          
          <motion.div 
            className="bg-[#D2AF34] bg-opacity-20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto mb-12 border border-[#D2AF34] border-opacity-30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg mb-4 text-white">
              تحت إشراف المستشار القانوني محمد مصطفى
            </p>
            <p className="text-xl font-semibold text-gray-200">
              محام ومستشار قانوني – عضو اتحاد المحامين العرب
            </p>
            <div className="mt-4 space-y-2 text-white">
              <p>مصر: +201117586879</p>
              <p>السعودية: +966566336181</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            خدماتنا السريعة
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-[#171616] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <FiSearch className="text-[#D2AF34]" size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center text-white">بحث في الموقع</h4>
              <input
                type="text"
                placeholder="ابحث عن استشارة أو خدمة..."
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:border-[#D2AF34] focus:outline-none"
              />
            </motion.div>
            
            <motion.div 
              className="bg-[#171616] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <FiHelpCircle className="text-[#D2AF34]" size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center text-white">اطرح سؤالاً</h4>
              <textarea
                placeholder="اكتب سؤالك القانوني هنا..."
                className="w-full px-4 py-3 rounded-lg bg-black  text-white border border-gray-600 focus:border-[#D2AF34] focus:outline-none h-24 resize-none"
              ></textarea>
              <button className="w-full mt-3 bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold">
                إرسال السؤال
              </button>
            </motion.div>
            
            <motion.div 
              className="bg-[#171616] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors border border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <FiUsers className="text-[#D2AF34]" size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center text-white">سجل الآن</h4>
              <p className="text-gray-300 mb-4 text-center">
                انضم إلى مجتمعنا واحصل على استشارات متميزة
              </p>
              <button className="w-full bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold">
                اشترك الآن
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Legal Documents Section */}
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
              { icon: FiFile, title: 'استشارات سابقة', desc: 'نماذج استشارات قانونية' }
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

      {/* Experience Section */}
      <div className="px-6 py-16 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <h3 className="text-4xl font-bold mb-6 text-yellow-400">
            خبرة في المحاماة أكثر من 14 عام
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            نقدم لكم خبرة قانونية ممتدة في كافة المجالات القانونية 
            بالسعودية ومصر، مع فريق من المحامين المتخصصين
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
