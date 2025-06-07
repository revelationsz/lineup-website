'use client';

import { motion } from 'framer-motion';

interface BenefitsSectionProps {
  className?: string;
}

export default function BenefitsSection({ className = '' }: BenefitsSectionProps) {
  const immediateBenefits = [
    {
      title: "Points = Proven Foot Traffic",
      description: "Bar Me users can redeem their in-app points at your bar for a free first drink or an instant cover-skip pass—so you only reward guests once they&apos;re inside and ready to spend more.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Smooth Demand on Your Terms",
      description: "Push &ldquo;Tonight&apos;s Specials&rdquo; or &ldquo;No cover before 9 PM&rdquo; to nearby users to fill slow hours and manage peak flow.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "VIP Boost in the App",
      description: "Bars that accept point redemptions get priority placement and a &ldquo;Rewards Here&rdquo; badge—making you the obvious next stop in every user&apos;s feed.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      )
    }
  ];

  const futurePromises = [
    {
      title: "Low-Cost, High-Intent Marketing",
      description: "Target users within walking distance when they&apos;re actively looking for their next spot."
    },
    {
      title: "Data You Can Use Tomorrow", 
      description: "See which promotions drive the most foot traffic and optimize your offerings in real-time."
    },
    {
      title: "Stand Out From the Pack",
      description: "Be the first in your area to offer seamless point redemption and instant rewards."
    }
  ];

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Main Point */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Real-Time Demand Into Revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bar Me turns real-time demand into revenue for your venue—putting your bar in front of thousands of nearby 21- to 35-year-olds exactly when they&apos;re deciding where to go and letting you fill seats, shorten lines, and promote specials with zero upfront cost.
          </p>
        </motion.div>

        {/* Immediate Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Immediate Benefits
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {immediateBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-purple text-white rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-purple to-purple-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Future Promise
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {futurePromises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-brand-green rounded-full"></div>
                </div>
                
                <h4 className="text-xl font-bold mb-3">
                  {promise.title}
                </h4>
                
                <p className="text-white/90 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-brand-purple mb-2">2,500+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-purple mb-2">$127</div>
            <div className="text-gray-600">Avg Check Size</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-purple mb-2">23%</div>
            <div className="text-gray-600">Revenue Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-purple mb-2">48hrs</div>
            <div className="text-gray-600">Setup Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 