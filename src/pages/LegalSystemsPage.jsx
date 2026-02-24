import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSearch as Search, 
  FiFilter as Filter,
  FiEye,
  FiDownload,
  FiBookOpen,
  FiSearch,
  FiFilter,
  FiFileText,
  
} from 'react-icons/fi';
import { 
  ChevronLeft,
  ChevronRight,
  Download,
  Eye
} from 'lucide-react';
import { FaBalanceScale } from "react-icons/fa";

const LegalSystemsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'systems', name: 'الأنظمة' },
    { id: 'regulations', name: 'اللوائح' },
    { id: 'precedents', name: 'سوابق قضائية' },
    { id: 'references', name: 'مراجع قانونية' },
    { id: 'books', name: 'كتب قانونية' }
  ];

  const legalDocuments = [
    {
      id: 1,
      title: 'نظام المحاماة السعودي',
      category: 'systems',
      type: 'نظام',
      date: '2024-01-15',
      description: 'النظام المنظم لمهنة المحاماة في المملكة العربية السعودية',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'لائحة الإجراءات التنفيذية',
      category: 'regulations',
      type: 'لائحة',
      date: '2023-12-20',
      description: 'اللائحة التنفيذية لنظام التنفيذ في السعودية',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'سابقة قضائية: النزاعات التجارية',
      category: 'precedents',
      type: 'سابقة قضائية',
      date: '2023-11-10',
      description: 'حكم محكمة النقض في نزاع تجاري مهم',
      size: '950 KB'
    },
    {
      id: 4,
      title: 'مرجع القانون المدني',
      category: 'references',
      type: 'مرجع',
      date: '2023-10-05',
      description: 'مرجع شامل لأحكام القانون المدني السعودي',
      size: '4.2 MB'
    },
    {
      id: 5,
      title: 'كتاب: العقود التجارية',
      category: 'books',
      type: 'كتاب',
      date: '2023-09-15',
      description: 'دراسة متخصصة في العقود التجارية وصياغتها',
      size: '3.1 MB'
    },
    {
      id: 6,
      title: 'نظام العمل السعودي',
      category: 'systems',
      type: 'نظام',
      date: '2023-08-20',
      description: 'النظام المنظم لعلاقات العمل في السعودية',
      size: '2.8 MB'
    },
    {
      id: 7,
      title: 'لائحة الشركات',
      category: 'regulations',
      type: 'لائحة',
      date: '2023-07-10',
      description: 'اللائحة التنفيذية لنظام الشركات',
      size: '3.5 MB'
    },
    {
      id: 8,
      title: 'سابقة قضائية: القضايا العمالية',
      category: 'precedents',
      type: 'سابقة قضائية',
      date: '2023-06-25',
      description: 'أحكام مهمة في قضايا العمال والعمل',
      size: '1.2 MB'
    }
  ];

  const filteredDocuments = legalDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const documentsPerPage = 6;
  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + documentsPerPage);

  const getTypeColor = (type) => {
    switch(type) {
      case 'نظام': return 'bg-blue-600 text-white';
      case 'لائحة': return 'bg-green-600 text-white';
      case 'سابقة قضائية': return 'bg-purple-600 text-white';
      case 'مرجع': return 'bg-orange-600 text-white';
      case 'كتاب': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
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
                  className="w-full pr-12 px-4 py-3 bg-[#0D0C0C] placeholder-white border border-gray-700 rounded-lg focus:border-[#D2AF34]  focus:outline-none"
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
                  {categories.map(category => (
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
                
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  {doc.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {doc.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{doc.date}</span>
                  <span>{doc.size}</span>
                </div>
                
                <div className="flex space-x-2 space-x-reverse">
                  <button className="flex-1 bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold flex items-center justify-center space-x-1 space-x-reverse">
                    <FiEye size={16} />
                    <span>معاينة</span>
                  </button>
                  <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center space-x-1 space-x-reverse">
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
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === page 
                      ? 'bg-yellow-600 text-black' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
    </div>
  );
};

export default LegalSystemsPage;
