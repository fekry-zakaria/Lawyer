import React, { useState } from 'react';
import BackgroundSection from './LegalSystemsPage/sections/BackgroundSection';
import ContentSection from './LegalSystemsPage/sections/ContentSection';

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
      <BackgroundSection />
      <ContentSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        paginatedDocuments={paginatedDocuments}
        getTypeColor={getTypeColor}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default LegalSystemsPage;
