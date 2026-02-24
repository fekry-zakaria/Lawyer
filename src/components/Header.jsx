import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Mail, Linkedin, Facebook, Twitter, MessageCircle, Scale } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                href="#" 
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook className='text-black' />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-yellow-200 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className='text-black' />
              </motion.a>
              <motion.a 
                href="#" 
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
          <div className="relative">
            <input
              type="text"
              placeholder="بحث..."
              className="bg-white bg-opacity-20 rounded-full py-1 px-4 pl-10 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
          </div>
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
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-3">
                <NavLink to="/dashboard" className="text-red-600 font-semibold">لوحة التحكم</NavLink>
                <NavLink to="/contact" className="text-gray-700">اتصل بنا</NavLink>
                <NavLink to="/" className="text-gray-900 font-semibold border-b-2 border-[#D2AF34] pb-1">الرئيسية</NavLink>
                <NavLink to="/about" className="text-gray-700">من نحن</NavLink>
                <NavLink to="/services" className="text-gray-700">خدماتنا</NavLink>
                <NavLink to="/legal-systems" className="text-gray-700">الأنظمة واللوائح</NavLink>
                <NavLink to="/precedents" className="text-gray-700">السوابق القضائية</NavLink>
                <NavLink to="/jobs" className="text-gray-700">الوظائف</NavLink>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
