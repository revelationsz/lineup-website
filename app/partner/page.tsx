'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/partner/HeroSection';
import ProofSection from '@/components/partner/ProofSection';
import BenefitsSection from '@/components/partner/BenefitsSection';
import HowItWorksSection from '@/components/partner/HowItWorksSection';
import ROICalculator from '@/components/partner/ROICalculator';
import RiskPilot from '@/components/partner/RiskPilot';
import StickyCTAForm from '@/components/partner/StickyCTAForm';

interface FormData {
  name: string;
  venue: string;
  email: string;
  phone: string;
  bestNight: string;
}

export default function PartnerPage() {
  if (process.env.NEXT_PUBLIC_PARTNER_PAGE_ENABLED !== 'true') {
    notFound();
  }

  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      setShowStickyCTA(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    // Trigger the sticky CTA form
    setShowStickyCTA(true);
  };

  const handleFormSubmit = (formData: FormData) => {
    // This will be handled by the StickyCTAForm component
    console.log('Form submitted:', formData);
  };

  return (
    <main className="relative overflow-hidden min-h-screen pb-24">
      {/* Purple blobs background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="gradient-blob absolute w-[500px] h-[500px] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(ellipse, rgba(138, 92, 246, 0.9), transparent 65%)',
            filter: 'blur(100px)',
            top: '15%',
            left: '10%',
          }}
        />
        <div
          className="gradient-blob absolute w-[450px] h-[450px] rounded-full opacity-85"
          style={{
            background: 'radial-gradient(ellipse, rgba(71, 1, 235, 0.85), transparent 65%)',
            filter: 'blur(100px)',
            bottom: '30%',
            right: '5%',
          }}
        />
      </div>
      {/* Hero Section */}
      <HeroSection onCTAClick={scrollToForm} />

      {/* Proof Section */}
      <ProofSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Risk-Free Pilot */}
      <RiskPilot />

      {/* Sticky CTA Form */}
      <StickyCTAForm 
        isVisible={showStickyCTA}
        onSubmit={handleFormSubmit}
      />
    </main>
  );
} 