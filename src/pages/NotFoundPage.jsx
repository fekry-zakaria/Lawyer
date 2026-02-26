import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiSearch, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
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

        {/* Extra Thin Accent Lines */}
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

      {/* 404 Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-8xl md:text-9xl font-bold mb-6 text-[#D2AF34]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            الصفحة غير موجودة
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            يمكنك العودة إلى الصفحة الرئيسية.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Home Button */}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-[#D2AF34] text-black px-6 py-3 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold"
            >
              <FiHome size={20} />
              <span>العودة للرئيسية</span>
            </Link>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
            >
              <FiArrowLeft size={20} />
              <span>العودة للخلف</span>
            </button>
          </motion.div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
