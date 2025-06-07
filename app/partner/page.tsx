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
    <main className="min-h-screen">
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