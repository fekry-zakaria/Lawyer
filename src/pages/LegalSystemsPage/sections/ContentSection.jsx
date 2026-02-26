import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiSearch, FiFilter, FiFileText, FiEye, FiDownload } from 'react-icons/fi';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaBalanceScale } from 'react-icons/fa';

const ContentSection = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  paginatedDocuments,
  getTypeColor,
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="relative z-10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-4 text-[#D2AF34] "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          الأنظمة واللوائح وسوابق قضائية
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          مكتبة شاملة تحتوي على الأنظمة واللوائح والسوابق القضائية والمراجع والكتب القانونية
        </motion.p>

        {/* Search and Filter */}
        <motion.div
          className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 mb-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute right-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث في الأنظمة واللوائح..."
                className="w-full pr-12 px-4 py-3 bg-[#0D0C0C] placeholder-white border border-gray-700 rounded-lg focus:border-[#D2AF34] text-white focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <FiFilter size={20} className="text-yellow-400" />
              <select
                className="px-4 py-3 bg-[#0D0C0C] border text-white border-gray-700 rounded-lg focus:border-[#D2AF34] focus:outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800 transition-colors border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-[#D2AF34] p-3 rounded-lg">
                  <FiFileText className="text-black" size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(doc.type)}`}>
                  {doc.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-yellow-400">{doc.title}</h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{doc.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{doc.date}</span>
                <span>{doc.size}</span>
              </div>

              <div className="flex space-x-2 space-x-reverse">
                <button className="flex-1 bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold flex items-center justify-center space-x-1 space-x-reverse">
                  <FiEye size={16} />
                  <span>معاينة</span>
                </button>
                <button className="flex-1 mx-4 bg-gray-950 text-white py-2 rounded-lg hover:bg-gray-500 transition-colors font-semibold flex items-center justify-center space-x-1 space-x-reverse">
                  <FiDownload size={16} />
                  <span>تحميل</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex items-center justify-center space-x-2 space-x-reverse"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  currentPage === page ? 'bg-yellow-600 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
          </motion.div>
        )}

        {/* Statistics */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-[#171616] rounded-lg p-6 text-center">
            <FiBookOpen className="text-[#D2AF34] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-[#D2AF34]">150+</h3>
            <p className="text-gray-300">نظام ولائحة</p>
          </div>
          <div className="bg-[#171616] rounded-lg p-6 text-center">
            <FaBalanceScale className="text-[#D2AF34] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-[#D2AF34]">200+</h3>
            <p className="text-gray-300">سابقة قضائية</p>
          </div>
          <div className="bg-[#171616] rounded-lg p-6 text-center">
            <FiFileText className="text-[#D2AF34] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-[#D2AF34]">80+</h3>
            <p className="text-gray-300">مرجع قانوني</p>
          </div>
          <div className="bg-[#171616] rounded-lg p-6 text-center">
            <FiBookOpen className="text-[#D2AF34] mx-auto mb-3" size={32} />
            <h3 className="text-2xl font-bold text-[#D2AF34]">50+</h3>
            <p className="text-gray-300">كتاب قانوني</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;
