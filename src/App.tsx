/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { InteractiveInquiry } from './components/InteractiveInquiry';
import { Footer } from './components/Footer';
import type { CoachingType } from './utils/consultation';

export default function App() {
  const [selectedService, setSelectedService] = useState<CoachingType>('in-person');

  const scrollToContact = (service?: CoachingType) => {
    if (service) {
      setSelectedService(service);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCoaching = () => {
    const element = document.getElementById('coaching');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#151515] font-sans antialiased selection:bg-[#2D132C] selection:text-[#FAF7F2]">
      {/* Top Banner: Quiet editorial status */}
      <div className="bg-[#2D132C] text-[#FAF7F2] text-[11px] sm:text-xs py-2 px-4 text-center tracking-widest uppercase font-semibold border-b border-[#3D1B3C]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span>Denver, CO · Private In-Person Training & Worldwide Online Coaching</span>
          <span aria-hidden="true" className="opacity-40 hidden sm:inline">|</span>
          <span className="text-[#E2CEC7] font-bold hidden sm:inline">Now Accepting New Clients</span>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar onOpenInquiry={() => scrollToContact()} />

      {/* Page Content Flow: Proposition -> Capabilities -> Proof/Values -> Action */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onStartJourney={() => scrollToContact()}
          onExploreCoaching={scrollToCoaching}
        />

        {/* 2. Coaching Services */}
        <ServicesSection
          onSelectService={(serviceKey) => scrollToContact(serviceKey)}
        />

        {/* 3. About Coach Kelly */}
        <AboutSection onStartInquiry={() => scrollToContact()} />

        {/* 4. Coaching Philosophy */}
        <PhilosophySection />

        {/* 5. Contact & Interactive Inquiry Prototype */}
        <InteractiveInquiry initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
