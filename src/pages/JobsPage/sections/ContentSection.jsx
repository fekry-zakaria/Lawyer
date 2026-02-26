import React from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiBriefcase, FiMapPin, FiClock, FiCalendar } from 'react-icons/fi';

const ContentSection = ({ jobs, formData, handleSubmit, handleChange, setFormData }) => {
  const highlights = [
    {
      id: 1,
      text: 'نحن لا نبحث عن موظفين فحسب، بل نبحث عن شركاء يشاركوننا الشغف لصناعة المستقبل. انضم إلى فريقنا المبدع وساهم في تحويل الأفكار العظيمة إلى واقع ملموس في بيئة عمل تدعم الابتكار والنمو المستمر.',
    },
    {
      id: 2,
      text: 'كن جزءاً من مسيرتنا نحو التميز. نوفر لك بيئة عمل احترافية تفتح لك آفاقاً واسعة للتطور المهني، ونقدر الكفاءات التي تسعى لتقديم قيمة مضافة في المجال القانوني.',
    },
    {
      id: 3,
      text: 'شاركنا النجاح.. ابدأ رحلتك المهنية معنا في بيئة تقدر الإبداع وتكافئ التميز. استعرض الوظائف المتاحة الآن وانضم إلى فريقنا.',
    },
  ];

  return (
    <div className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-[#D2AF34]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          الوظائف
        </motion.h1>

        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 mb-12 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="text-2xl font-bold text-yellow-400 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            فرصتك لتكون جزءاً من فريقنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-black rounded-lg p-6 border border-gray-700 hover:border-[#D2AF34] transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#D2AF34] flex items-center justify-center mb-4">
                  <span className="text-black font-bold">{item.id}</span>
                </div>
                <p className="text-gray-200 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Listings */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">الوظائف المتاحة</h2>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#171616] rounded-lg p-6 border border-gray-700 hover:border-[#D2AF34] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{job.title}</h3>
                <p className="text-gray-300 mb-4">{job.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiBriefcase size={16} className="text-[#D2AF34]" />
                    <span className="text-sm font-semibold text-white px-2">{job.department}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiMapPin size={16} className="text-[#D2AF34]" />
                    <span className="text-sm font-semibold text-white px-2">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiClock size={16} className="text-[#D2AF34]" />
                    <span className="text-sm font-semibold text-white px-2">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <FiCalendar size={16} className="text-[#D2AF34]" />
                    <span className="text-sm font-semibold text-white px-2">{job.experience}</span>
                  </div>
                  <button className="bg-[#D2AF34] text-black px-4 py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold">
                    تقديم طلب
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Application Form */}
          <motion.div
            className="bg-[#171616] backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">تقديم طلب وظيفة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">الاسم الكامل *</label>
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

              <div>
                <label className="block text-sm font-medium mb-2 text-white">رقم الهاتف *</label>
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
                <label className="block text-sm font-medium mb-2 text-white">الوظيفة المتقدم لها *</label>
                <select
                  name="position"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  value={formData.position}
                  onChange={handleChange}
                >
                  <option value="">اختر الوظيفة</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">سنوات الخبرة *</label>
                <input
                  type="text"
                  name="experience"
                  required
                  placeholder="مثال: 5 سنوات"
                  className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">السيرة الذاتية (PDF) *</label>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D2AF34] text-black py-3 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold flex items-center justify-center space-x-2 space-x-reverse"
              >
                <FiSend size={20} />
                <span>إرسال الطلب</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
