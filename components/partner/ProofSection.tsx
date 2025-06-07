'use client';

import { motion } from 'framer-motion';

interface ProofSectionProps {
  className?: string;
}

export default function ProofSection({ className = '' }: ProofSectionProps) {
  // TODO: Replace with actual partner logos and testimonials
  const partnerLogos = [
    { name: 'The Sinclair', logo: 'TS' },
    { name: 'House of Blues', logo: 'HB' },
    { name: 'Paradise Rock Club', logo: 'PR' },
    { name: 'Brighton Music Hall', logo: 'BM' },
    { name: 'Royale Boston', logo: 'RB' },
  ];

  const testimonials = [
    {
      quote: "&ldquo;Bar Me brought us 40+ new customers on our slowest Tuesday. The point redemption system is genius.&rdquo;",
      author: "Sarah Chen",
      venue: "The Sinclair",
      role: "General Manager"
    },
    {
      quote: "&ldquo;We filled our 9 PM dead zone with targeted specials. Revenue up 23% on weeknights.&rdquo;",
      author: "Mike Rodriguez", 
      venue: "Paradise Rock Club",
      role: "Operations Director"
    },
    {
      quote: "&ldquo;The VIP boost feature put us at the top of every user&apos;s feed. Best marketing ROI we&apos;ve seen.&rdquo;",
      author: "Jessica Park",
      venue: "Royale Boston", 
      role: "Marketing Manager"
    }
  ];

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Trusted by Boston&apos;s Top Venues
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* TODO: Replace with actual logos */}
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-gray-600">{partner.logo}</span>
                </div>
                <span className="text-xs text-gray-500 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="flex text-brand-green">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote 
                className="text-gray-700 mb-4 italic"
                dangerouslySetInnerHTML={{ __html: testimonial.quote }}
              />
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm font-medium text-brand-purple">{testimonial.venue}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Zero Upfront Cost</h3>
            <p className="text-sm text-gray-600">Only pay when customers redeem points</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Instant Setup</h3>
            <p className="text-sm text-gray-600">Live in your venue within 48 hours</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Real-Time Analytics</h3>
            <p className="text-sm text-gray-600">Track performance and optimize daily</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 