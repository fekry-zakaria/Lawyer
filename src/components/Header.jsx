import React, { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Mail, Linkedin, Facebook, Twitter, MessageCircle, Scale } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { searchData } from '../data/searchData';
import { searchItems } from '../utils/searchUtils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className="relative z-50">
      {/* Top Bar - Golden */}
      <div className="bg-[#D2AF34] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Right Side - Social Icons + Profile */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-3 space-x-reverse">
              <motion.a 
                href="#" 
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className='text-black'/>

           
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61560874980771&mibextid=wwXIfr&rdid=nr7s8FL5Sp2YFADn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AUbyk5yfy%2F%3Fmibextid%3DwwXIfr#
" 
                target="_blank"
                rel="noopener noreferrer"
               
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook className='text-black' />
              </motion.a>
              <motion.a 
                href="https://x.com/lawyeer_mohamed" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className='text-black' />
              </motion.a>
              <motion.a 
                  href="https://wa.me/966566336181" 
                    target="_blank"
                    rel="noopener noreferrer" 
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <MdWhatsapp className='text-black mx-2' />
              </motion.a>
            </div>

          </div>

          {/* Middle Info */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse text-sm">
             <Mail size={16} className='text-black mx-2' />
            <span className='text-black font-bold'>المستشار القانوني محمد مصطفى</span>
           
          </div>

       


             {/* Search Bar - Left */}
          <form className="relative" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="بحث..."
              className="bg-white bg-opacity-20 rounded-full py-1 px-4 pl-10 text-sm placeholder-black focus:outline-none focus:ring-2 text-black focus:ring-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />

            {!isMobileMenuOpen && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-40">
                {suggestions.map((item) => (
                  <button
                    key={`${item.type}:${item.title}`}
                    type="button"
                    className="w-full text-right px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
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
        </div>
      </div>

      {/* Bottom Navigation Bar - White */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            
  {/* Right Side - Logo/Name */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-[#D2AF34] rounded-full flex items-center justify-center">
                <Scale className="text-white" size={20} />
              </div>
              <div className="text-sm">
                <div className="font-bold text-gray-900">محمد مصطفى</div>
                <div className="text-xs text-gray-600">مستشار قانوني</div>
              </div>
            </div>
            {/* Middle Navigation */}
            <nav className="hidden md:flex  gap-8">
                 
                 <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1" 
                      : "text-gray-700 hover:text-gray-900 transition-colors"
                  }
                >
                  الرئيسية
                </NavLink>
              </motion.div> 
                <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1" 
                      : "text-gray-700 hover:text-gray-900 transition-colors"
                  }
                >
                  من نحن
                </NavLink>
              </motion.div>
               
              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1" 
                      : "text-gray-700 hover:text-gray-900 transition-colors"
                  }
                >
                  خدماتنا
                </NavLink>
              </motion.div> 

              
              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/legal-systems" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1" 
                      : "text-gray-700 hover:text-gray-900 transition-colors"
                  }
                >
                  الأنظمة واللوائح
                </NavLink>
              </motion.div>
               
              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/jobs" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1 " 
                      : "text-gray-700 hover:text-gray-900 transition-colors"
                  }
                >
                  الوظائف
                </NavLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink 
                  to="/contact" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  اتصل بنا
                </NavLink>
              </motion.div>
           
            
            

            </nav>

          

            {/* Mobile Menu Button */}
           <button 
  className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
  onClick={() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setSearchQuery('');
  }}
>
  <motion.span
    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
    className="w-6 h-0.5 bg-gray-800 mb-1 block"
  />
  <motion.span
    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
    className="w-6 h-0.5 bg-gray-800 mb-1 block"
  />
  <motion.span
    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
    className="w-6 h-0.5 bg-gray-800 block"
  />
</button>
          </div>

          {/* Mobile Menu */}
       <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl p-6 z-50"
    >
      <div className="flex flex-col space-y-5 text-right">

        <NavLink 
          to="/" 
          className="text-lg font-semibold text-gray-900 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          الرئيسية
        </NavLink>

        <NavLink 
          to="/about" 
          className="text-lg text-gray-700 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          من نحن
        </NavLink>

        <NavLink 
          to="/services" 
          className="text-lg text-gray-700 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          خدماتنا
        </NavLink>

        <NavLink 
          to="/legal-systems" 
          className="text-lg text-gray-700 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          الأنظمة واللوائح
        </NavLink>

        <NavLink 
          to="/jobs" 
          className="text-lg text-gray-700 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          الوظائف
        </NavLink>

        <NavLink 
          to="/contact" 
          className="text-lg text-gray-700 hover:text-[#D2AF34] transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          اتصل بنا
        </NavLink>

      </div>
    </motion.div>
  )}
</AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
