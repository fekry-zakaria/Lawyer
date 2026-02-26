import React, { useState } from 'react';
import { 
  FiFileText as FileText, 
  FiBriefcase as Briefcase, 
  FiUsers as Users, 
  FiCalendar as Calendar, 
  FiDollarSign as DollarSign,
  FiCreditCard as CreditCard,
} from 'react-icons/fi';
import { FaBuilding } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import BackgroundSection from './ServicesPage/sections/BackgroundSection';
import ContentSection from './ServicesPage/sections/ContentSection';
import ServiceFormModalSection from './ServicesPage/sections/ServiceFormModalSection';

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundSection />
      <ContentSection services={services} setSelectedService={setSelectedService} />

      {selectedService && (
        <ServiceFormModalSection service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
};

export default ServicesPage;
