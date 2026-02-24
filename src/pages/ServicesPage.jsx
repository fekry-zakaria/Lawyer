import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiFileText as FileText, 

  FiBriefcase as Briefcase, 
  FiUsers as Users, 
 
  FiCalendar as Calendar, 
 
  FiDollarSign as DollarSign,
  FiCreditCard as CreditCard,
  FiArrowLeft as ArrowLeft
} from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'طلب استشارة قانونية',
      icon: FileText,
      description: 'احصل على استشارة قانونية متخصصة من خبرائنا',
      price: '100 دولار',
      requiresLogin: true
    },
    {
      id: 2,
      title: 'طلب صياغة العقود والمذكرات',
      icon: FileText,
      description: 'صياغة احترافية للعقود والمذكرات واللوائح الاعتراضية',
      price: 'حسب الاتفاق',
      requiresLogin: false
    },
    {
      id: 3,
      title: 'طلب التوكيل في قضية جنائية',
      icon: FaGavel,
      description: 'تمثيل قانوني كامل في القضايا الجنائية',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 4,
      title: 'طلب التوكيل في قضية تجارية',
      icon: Briefcase,
      description: 'متخصصون في القضايا التجارية والشركات',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 5,
      title: 'طلب التوكيل في قضية عمالية',
      icon: Users,
      description: 'خبرة في قضايا العمل والعمال',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 6,
      title: 'طلب التوكيل في قضية عامة',
      icon: FaBalanceScale,
      description: 'تمثيل قانوني في كافة القضايا المدنية',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 7,
      title: 'طلب التوكيل في قضايا التعويض',
      icon: DollarSign,
      description: 'متابعة قضايا التعويض والحقوق المالية',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 8,
      title: 'طلب تأسيس الشركات',
      icon: FaBuilding,
      description: 'تأسيس الشركات بكافة أنواعها وإجراءاتها',
      price: 'حسب الشركة',
      requiresLogin: false
    },
    {
      id: 9,
      title: 'طلب عقد سنوي للمؤسسات',
      icon: Calendar,
      description: 'استشارات قانونية سنوية للمؤسسات',
      price: 'حسب الاتفاق',
      requiresLogin: false
    },
    {
      id: 10,
      title: 'طلب عقد سنوي للشركات',
      icon: CreditCard,
      description: 'خدمات قانونية متكاملة للشركات',
      price: 'حسب الاتفاق',
      requiresLogin: false
    },
    {
      id: 11,
      title: 'طلب التحكيم',
      icon: FaGavel,
      description: 'خدمات التحكيم التجاري والدولي',
      price: 'حسب القضية',
      requiresLogin: false
    }
  ];

  const ServiceForm = ({ service, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      details: ''
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
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft size={24} />
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
                <p className="text-red-200">
                  يتطلب تسجيل الدخول. يرجى تسجيل الدخول أولاً أو إنشاء حساب جديد.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">تفاصيل الطلب</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D2AF34] text-black py-2 rounded-lg hover:bg-[#c4a030] transition-colors font-semibold"
              >
                إرسال الطلب
              </button>
              {service.requiresLogin && (
                <p className="text-xs text-red-400 mt-2">يتطلب تسجيل الدخول</p>
              )}
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
            className="text-4xl font-bold text-center mb-4 text-yellow-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            خدماتنا القانونية
          </motion.h1>
          <motion.p 
            className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            نقدم مجموعة متكاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="bg-[#171616] backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800 transition-all hover:shadow-xl hover:shadow-[#D2AF34]/20 cursor-pointer border border-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#D2AF34] p-4 rounded-full">
                      <Icon className="text-black" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-center mb-4">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="bg-[#D2AF34] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                    {service.requiresLogin && (
                      <p className="text-xs text-red-400 mt-2">يتطلب تسجيل الدخول</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceForm 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default ServicesPage;
