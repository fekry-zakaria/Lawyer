import React from 'react';
import BackgroundSection from './HomePage/sections/BackgroundSection';
import HeroSection from './HomePage/sections/HeroSection';
import QuickActionsSection from './HomePage/sections/QuickActionsSection';
import LegalDocumentsSection from './HomePage/sections/LegalDocumentsSection';
import TestimonialsSection from './HomePage/sections/TestimonialsSection';
import ExternalLinksSection from './HomePage/sections/ExternalLinksSection';
import ExperienceSection from './HomePage/sections/ExperienceSection';

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundSection />
      <HeroSection />
      <QuickActionsSection />
      <LegalDocumentsSection />
      <TestimonialsSection />
      <ExternalLinksSection />
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
