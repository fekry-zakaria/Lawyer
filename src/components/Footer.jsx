import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 border-b border-gray-800 pb-12">

          {/* About Office */}
          <div>
            <h3 className="text-[#D2AF34] font-semibold mb-4 text-lg">
              عن المكتب
            </h3>
            <p className="leading-7 text-sm text-gray-400">
              نقدم حلولاً قانونية شاملة بخبرة تزيد عن 14 عاماً
              في جمهورية مصر العربية والمملكة العربية السعودية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D2AF34] font-semibold mb-4 text-lg">
          
              روابط سريعة
             
            </h3>
            <ul className="space-y-3 text-sm">
              <li  onClick={() => window.scrollTo(0, 0)} className="hover:text-[#D2AF34] cursor-pointer transition"> 
                 <NavLink  to="/services">
                خدماتنا
                </NavLink >
              </li> 
              <li  onClick={() => window.scrollTo(0, 0)} className="hover:text-[#D2AF34] cursor-pointer transition">
                   <NavLink to="/contact" >
                اتصل بنا
                </NavLink>
              </li>
              <li  onClick={() => window.scrollTo(0, 0)} className="hover:text-[#D2AF34] cursor-pointer transition">
                   <NavLink  to="/jobs" >
                الوظائف
                </NavLink>
              </li>
              {/* <li  onClick={() => window.scrollTo(0, 0)} className="hover:text-[#D2AF34] cursor-pointer transition">
                دخول الإدارة
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D2AF34] font-semibold mb-4 text-lg">
              اتصل بنا
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
             <a 
    href="mailto:mohamedmoostafa.124@gmail.com"
     target="_blank"
  rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
  >
    <FaEnvelope className="text-[#D2AF34]" />
    <span>mohamedmoostafa.124@gmail.com</span>
  </a>
              </div>

              <div className="flex items-center gap-2">
                <a 
    href="tel:+966566336181"
    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
  >
    <FaPhoneAlt className="text-[#D2AF34]" />
    <span dir="ltr">+966 56 633 6181 KSA</span>
  </a>
              </div>

              <div className="flex items-center gap-2">
             <a 
    href="tel:+201117586879"
    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
           >
              <FaPhoneAlt className="text-[#D2AF34]" />
             <span dir="ltr">+20 111 758 6879 EGY</span>
   </a>
              </div>

            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col justify-center  pl-8">
           
            <div className="flex items-center gap-3 mb-4 ">
              <FaScaleBalanced className="text-[#D2AF34]" size={28} />
              <span className="text-4xl font-bold text-white">+14</span>
            </div>

            <p className="text-[#D2AF34] text-sm">
              عاماً من الخبرة في المحاماة
            </p>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-500">

          <p>
            © 2026 المستشار القانوني محمد مصطفى - جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#D2AF34] cursor-pointer transition">
              دخول المستخدم
            </span>
            <span className="hover:text-[#D2AF34] cursor-pointer transition">
              شراء الخدمات
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;