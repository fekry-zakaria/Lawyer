import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            className="text-4xl font-bold text-center mb-12 text-[#D2AF34]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            اتصل بنا
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#D2AF34]">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">الاسم *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">الجوال *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">الموضوع *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">الرسالة *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D2AF34] text-black py-3 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <FiSend size={20} />
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
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
                    <div className='px-3'>
                      <p className="text-sm text-gray-400">الهاتف</p>
                      <p className="font-semibold text-white">0566336181</p>
                      <p className="font-semibold text-white">01117586879</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-[#D2AF34] p-3 rounded-full">
                      <FiMail className="text-black" size={20} />
                    </div>
                    <div className='px-3'>
                      <p className="text-sm text-gray-400">البريد الإلكتروني</p>
                      <p className="font-semibold text-white">mohamedmostafa124@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-[#D2AF34] p-3 rounded-full">
                      <FiMapPin className="text-black" size={20} />
                    </div>
                    <div className='px-3'>
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
                      <span className='px-2'>الأحد - الخميس</span>
                    </div>
                    <span className="font-semibold text-white">9:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse text-white">
                      <FiClock className="text-[#D2AF34]" size={20} />
                      <span className='px-2'>السبت</span>
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
          </div>

          {/* Quick Links */}
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-[#171616] rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">روابط سريعة</h3>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">خدماتنا</a>
                <a href="/about" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">من نحن</a>
                <a href="/legal-systems" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">الأنظمة واللوائح</a>
              </div>
            </div>
            
            <div className="bg-[#171616] rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">تواصل معنا</h3>
              <div className="space-y-2">
                <a href="tel:+966566336181" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">+966566336181</a>
                <a href="tel:+201117586879" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">+201117586879</a>
                <a href="mailto:info@example.com" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">info@example.com</a>
              </div>
            </div>
            
            <div className="bg-[#171616] rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-[#D2AF34]">خدمات إضافية</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">الأسئلة الشائعة</a>
                <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">المدونة القانونية</a>
                <a href="#" className="block text-gray-300 hover:text-[#D2AF34] transition-colors">النشرات الإخبارية</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
