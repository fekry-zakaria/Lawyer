import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

const ServiceFormModalSection = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-yellow-400">{service.title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <IoMdClose size={24} />
            </button>
          </div>

          <p className="text-gray-300 mb-6">{service.description}</p>

          {service.price && (
            <div className="bg-yellow-600 text-black p-4 rounded-lg mb-6">
              <p className="font-semibold">التكلفة: {service.price}</p>
            </div>
          )}

          {service.requiresLogin && (
            <div className="bg-red-900 border border-red-700 p-4 rounded-lg mb-6">
              <p className="text-red-200">يتطلب تسجيل الدخول. يرجى تسجيل الدخول أولاً أو إنشاء حساب جديد.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white ">الاسم الكامل</label>
              <input
                type="text"
                required
                className="w-full px-4 text-white py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">البريد الإلكتروني</label>
              <input
                type="email"
                required
                className="w-full px-4 text-white py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">رقم الهاتف</label>
              <input
                type="tel"
                required
                className="w-full px-4 text-white py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white">تفاصيل الطلب</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 text-white py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold"
            >
              إرسال الطلب
            </button>
            {service.requiresLogin && <p className="text-xs text-red-400 mt-2">يتطلب تسجيل الدخول</p>}
          </form>

          {service.price === '100 دولار' && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">معلومات الدفع</h4>
              <p className="text-sm text-gray-300 mb-2">الحساب البنكي: سيتم إرسال التفاصيل بعد تأكيد الطلب</p>
              <p className="text-sm text-gray-300">السويفت كود: سيتم إرسال التفاصيل بعد تأكيد الطلب</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceFormModalSection;
