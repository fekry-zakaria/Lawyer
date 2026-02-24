import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiBriefcase, FiMapPin, FiClock, FiDollarSign, FiCalendar } from 'react-icons/fi';

const JobsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cv: null
  });

  const jobs = [
    {
      id: 1,
      title: 'محامي متخصص في القضايا التجارية',
      department: 'القسم التجاري',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '5+ سنوات',
      salary: 'مميز',
      description: 'نبحث عن محامي متخصص في القضايا التجارية والشركات'
    },
    {
      id: 2,
      title: 'مستشار قانوني',
      department: 'الاستشارات',
      location: 'القاهرة',
      type: 'دوام كامل',
      experience: '7+ سنوات',
      salary: 'مميز',
      description: 'مستشار قانوني لتقديم الاستشارات للعملاء'
    },
    {
      id: 3,
      title: 'باحث قانوني',
      department: 'البحث القانوني',
      location: 'الرياض',
      type: 'دوام جزئي',
      experience: '2+ سنوات',
      salary: 'جيد',
      description: 'باحث قانوني لإعداد الأبحاث والدراسات'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
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
            الوظائف
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Job Listings */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">الوظائف المتاحة</h2>
              {jobs.map(job => (
                <div key={job.id} className="bg-[#171616] rounded-lg p-6 border border-gray-700 hover:border-[#D2AF34] transition-colors">
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
                    {jobs.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
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
                    onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
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
    </div>
  );
};

export default JobsPage;
