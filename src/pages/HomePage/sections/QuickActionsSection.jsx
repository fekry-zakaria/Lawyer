import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiHelpCircle, FiUsers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../../../data/searchData';
import { searchItems } from '../../../utils/searchUtils';

const QuickActionsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    return searchItems(searchQuery, searchData, 5);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const best = suggestions[0];
    if (best?.route) {
      navigate(best.route);
      setSearchQuery('');
    }
  };

  return (
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
            <form className="relative" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="ابحث عن استشارة أو خدمة..."
                className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-600 focus:border-[#D2AF34] focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-[#171616] rounded-lg border border-gray-700 overflow-hidden">
                  {suggestions.map((item) => (
                    <button
                      key={`${item.type}:${item.title}`}
                      type="button"
                      className="w-full text-right px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]"
                      onClick={() => {
                        navigate(item.route);
                        setSearchQuery('');
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </form>
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
            <p className="text-gray-300 mb-4 text-center">انضم إلى مجتمعنا واحصل على استشارات متميزة</p>
            <button className="w-full bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold">
              اشترك الآن
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsSection;
