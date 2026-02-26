import React from 'react';

import HeaderSection from './HeaderSection';
import FormSection from './FormSection';
import InfoSection from './InfoSection';
import QuickLinksSection from './QuickLinksSection';

const ContentSection = ({ formData, handleSubmit, handleChange }) => {
  return (
    <div className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <HeaderSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FormSection formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />

          {/* Contact Information */}
          <InfoSection />
        </div>

        {/* Quick Links */}
        <QuickLinksSection />
      </div>
    </div>
  );
};

export default ContentSection;
