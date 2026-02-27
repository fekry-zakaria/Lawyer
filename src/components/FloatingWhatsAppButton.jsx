import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+966566336181"; // بدون +
    const message =
      "مرحباً، أود الاستفسار عن خدماتكم القانونية - مرسل من الموقع الرسمي";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* ================= Popup منفصل تماماً ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-3 flex items-center">
              <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center mr-3">
                <FaWhatsapp className="text-white" size={20} />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">
                  المستشار القانوني
                </h3>
                <p className="text-green-300 text-xs flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  متصل الآن
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-3 bg-gray-50">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                <p className="text-gray-800 text-sm">
                  أهلاً بك 👋<br />
                  يمكنك التحدث مباشرة مع المستشار عبر الواتساب.
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#128C7E] transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="ml-2" size={16} />
                محادثة عبر الواتساب
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= الزر ثابت لوحده ================= */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all border-2 border-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaWhatsapp size={24} />
          <motion.div
          className="absolute -top-1 -left-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          
        </motion.div>
      </motion.button>
    </>
  );
};

export default FloatingWhatsAppButton;
