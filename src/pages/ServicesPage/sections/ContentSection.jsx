import React from 'react';
import { motion } from 'framer-motion';

const ContentSection = ({ services, setSelectedService }) => {
  return (
    <div className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          خدماتنا القانونية
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          نقدم مجموعة متكاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-[#D2AF34]/20 cursor-pointer border border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#D2AF34] p-4 rounded-full">
                    <Icon className="text-black" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{service.description}</p>
                <div className="text-center">
                  <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">{service.price}</span>
                  {service.requiresLogin && <p className="text-xs text-red-400 mt-2">يتطلب تسجيل الدخول</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
