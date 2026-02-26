import React from 'react';
import BackgroundSection from './AboutPage/sections/BackgroundSection';
import ContentSection from './AboutPage/sections/ContentSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundSection />
      <ContentSection />
    </div>
  );
};

export default AboutPage;
