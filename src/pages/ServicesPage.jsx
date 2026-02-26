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
      description: 'تمثيل المتهم أو المجني عليه أمام الجهات المختصة (الشرطة، النيابة، المحكمة الجزائية) في قضايا الجرائم مثل السرقات، الاعتداء، أو القضايا المعلوماتية للدفاع عن الحقوق وإثبات البراءة أو استرداد الحق.',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 4,
      title: 'طلب التوكيل في قضية تجارية',
      icon: Briefcase,
      description: 'الترافع في النزاعات التي تنشأ بين التجار أو الشركات بسبب العقود التجارية، الوكالات، أو الأوراق المالية (شيكات، كمبيالات) أمام المحاكم التجارية.',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 5,
      title: 'طلب التوكيل في قضية عمالية',
      icon: Users,
      description: 'تمثيل الموظف أو صاحب العمل في النزاعات المتعلقة بعقود العمل، مثل الرواتب المتأخرة، التعويض عن الفصل تعسفياً، ومكافأة نهاية الخدمة أمام المحاكم العمالية.',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 6,
      title: 'طلب التوكيل في قضية عامة',
      icon: FaBalanceScale,
      description: 'تمثيل الموكل في القضايا التي لا تندرج تحت تصنيف محدد (تجارية أو عمالية)، وتشمل عادةً المطالبات المالية بين الأفراد، العقارات، ونزاعات الملكية.',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 7,
      title: 'طلب التوكيل في قضايا التعويض',
      icon: DollarSign,
      description: 'المطالبة بجبر الضرر المادي أو المعنوي الناتج عن فعل خاطئ (مثل حوادث السير، الأخطاء الطبية، أو الإضرار بالسمعة) والحصول على تعويض مالي عادل.',
      price: 'حسب القضية',
      requiresLogin: false
    },
    {
      id: 8,
      title: 'طلب تأسيس الشركات',
      icon: FaBuilding,
      description: 'القيام بكافة الإجراءات القانونية والإدارية لإنشاء كيان قانوني جديد، بدءاً من صياغة عقد التأسيس واختيار نوع الشركة (محدودة، مساهمة، إلخ) وصولاً لاستخراج السجل التجاري.',
      price: 'حسب الشركة',
      requiresLogin: false
    },
    {
      id: 9,
      title: 'طلب عقد سنوي للمؤسسات',
      icon: Calendar,
      description: 'تقديم استشارات قانونية ودعم مستمر للمؤسسات الفردية مقابل رسوم دورية، ليشمل مراجعة العقود، توجيه الإنذارات، وضمان الامتثال للأنظمة القانونية.',
      price: 'حسب الاتفاق',
      requiresLogin: false
    },
    {
      id: 10,
      title: 'طلب عقد سنوي للشركات',
      icon: CreditCard,
      description: 'شراكة قانونية مستدامة مع الشركات لإدارة مخاطرها القانونية، صياغة لوائحها الداخلية، تمثيلها أمام الغير، وتقديم المشورة الفنية في قرارات مجلس الإدارة.',
      price: 'حسب الاتفاق',
      requiresLogin: false
    },
    {
      id: 11,
      title: 'طلب التحكيم',
      icon: FaGavel,
      description: 'اللجوء إلى "محكّم" أو لجنة تحكيم للفصل في نزاع معين كبديل للقضاء العام، وتتميز هذه الخدمة بالسرعة والسرية والتخصص الفني في موضوع النزاع.',
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
