import React from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const FormSection = ({ formData, handleSubmit, handleChange }) => {
  return (
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
  );
};

export default FormSection;
