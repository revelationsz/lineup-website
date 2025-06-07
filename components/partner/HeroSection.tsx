'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  headline?: string;
  onCTAClick: () => void;
}

export default function HeroSection({ 
  headline = "Fill Seats in Real Time—Get Featured Where Boston Decides to Go Out.",
  onCTAClick 
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,91,255,0.3),transparent_50%)]" />
      </div>
      
      <div className="max-w-content mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white z-10"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {headline}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bar Me turns real-time demand into revenue for your venue—putting your bar in front of thousands of nearby 21- to 35-year-olds exactly when they&apos;re deciding where to go.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onCTAClick}
                className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Become a Launch Partner
              </button>
              
              <div className="flex items-center text-brand-green">
                <div className="w-3 h-3 bg-brand-green rounded-full mr-3 animate-pulse" />
                <span className="font-medium">Limited to 25 Boston venues</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* TODO: Replace with actual bar image */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-green/20" />
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-brand-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Lively Bar Scene</p>
                  <p className="text-sm text-gray-300">TODO: Add hero image</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-purple">2,500+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-brand-green rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$127</div>
                <div className="text-sm text-white/80">Avg. Check Size</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 