import React, { useState } from 'react';
import BackgroundSection from './JobsPage/sections/BackgroundSection';
import ContentSection from './JobsPage/sections/ContentSection';

const JobsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    cv: null
  });

  const jobs = [
    {
      id: 1,
      title: 'محامي متخصص في القضايا التجارية',
      department: 'القسم التجاري',
      location: 'الرياض',
      type: 'دوام كامل',
      experience: '5+ سنوات',
      salary: 'مميز',
      description: 'نبحث عن محامي متخصص في القضايا التجارية والشركات'
    },
    {
      id: 2,
      title: 'مستشار قانوني',
      department: 'الاستشارات',
      location: 'القاهرة',
      type: 'دوام كامل',
      experience: '7+ سنوات',
      salary: 'مميز',
      description: 'مستشار قانوني لتقديم الاستشارات للعملاء'
    },
    {
      id: 3,
      title: 'باحث قانوني',
      department: 'البحث القانوني',
      location: 'الرياض',
      type: 'دوام جزئي',
      experience: '2+ سنوات',
      salary: 'جيد',
      description: 'باحث قانوني لإعداد الأبحاث والدراسات'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundSection />
      <ContentSection
        jobs={jobs}
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setFormData={setFormData}
      />
    </div>
  );
};

export default JobsPage;
