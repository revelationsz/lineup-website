'use client';

import { motion } from 'framer-motion';

interface RiskPilotProps {
  className?: string;
}

export default function RiskPilot({ className = '' }: RiskPilotProps) {
  const guarantees = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Zero Upfront Cost",
      description: "No setup fees, no monthly minimums, no hidden charges"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "30-Day Performance Pilot",
      description: "No cost if fewer than 100 check-ins in your first month"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "48-Hour Setup",
      description: "Live in your venue within 2 business days"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l.447 2.235a1 1 0 00.832.832L15.82 6l-2.235.447a1 1 0 00-.832.832L12 9.82l-.447-2.235a1 1 0 00-.832-.832L8.18 6l2.235-.447a1 1 0 00.832-.832L12 2.18z"/>
        </svg>
      ),
      title: "Cancel Anytime",
      description: "No contracts, no commitments, no penalties"
    }
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Urgency Strip */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-brand-green/20 border border-brand-green/30 rounded-full px-6 py-3 mb-6">
            <div className="w-3 h-3 bg-brand-green rounded-full mr-3 animate-pulse" />
            <span className="text-brand-green font-semibold">
              Founding spots limited to 25 Boston venues
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Risk-Free Pilot Program
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're so confident Bar Me will drive revenue to your venue that we're offering a completely risk-free 30-day pilot program.
            </p>

            <div className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-brand-green mb-4">
                Our Guarantee to You
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                If you don't see at least <strong className="text-white">100 verified check-ins</strong> in your first 30 days, 
                you pay nothing. We'll even help you optimize your offerings to maximize results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Apply Now - Risk Free
              </button>
              
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>No credit card required</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Guarantees Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-purple/20 text-brand-purple rounded-lg flex items-center justify-center mb-4">
                  {guarantee.icon}
                </div>
                
                <h4 className="font-bold text-white mb-2">
                  {guarantee.title}
                </h4>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-green mb-2">15</div>
            <div className="text-gray-400">Spots Remaining</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-green mb-2">48hrs</div>
            <div className="text-gray-400">Average Setup Time</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-green mb-2">100%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Join these Boston venues already seeing results:
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>The Sinclair</span>
            <span>•</span>
            <span>Paradise Rock Club</span>
            <span>•</span>
            <span>Royale Boston</span>
            <span>•</span>
            <span>Brighton Music Hall</span>
            <span>•</span>
            <span>House of Blues</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 