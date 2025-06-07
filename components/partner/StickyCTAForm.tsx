'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StickyCTAFormProps {
  isVisible: boolean;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  venue: string;
  email: string;
  phone: string;
  bestNight: string;
}

export default function StickyCTAForm({ isVisible, onSubmit }: StickyCTAFormProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    venue: '',
    email: '',
    phone: '',
    bestNight: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.venue.trim()) newErrors.venue = 'Venue name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.bestNight) newErrors.bestNight = 'Please select your best night';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        setFormData({
          name: '',
          venue: '',
          email: '',
          phone: '',
          bestNight: ''
        });
        // Close form after successful submission
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const nightOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Sticky CTA */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden sm:block fixed bottom-6 right-6 z-50"
          >
            <div className="bg-brand-purple shadow-2xl rounded-2xl p-6 max-w-sm">
              <h3 className="text-white font-bold text-lg mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 text-sm mb-4">
                Join 15+ Boston venues already seeing results
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full bg-brand-green hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Become a Launch Partner
              </button>
              <div className="flex items-center justify-center mt-3 text-white/80 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Risk-free 30-day pilot
              </div>
            </div>
          </motion.div>

          {/* Mobile Bottom Sheet */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="sm:hidden fixed bottom-0 left-0 right-0 z-50"
          >
            <div className="bg-brand-purple p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Launch Partner Program
                  </h3>
                  <p className="text-white/90 text-sm">
                    Risk-free 30-day pilot
                  </p>
                </div>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-brand-green hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
              <div className="flex items-center text-white/80 text-xs">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                15 spots remaining • Zero upfront cost
              </div>
            </div>
          </motion.div>

          {/* Form Modal */}
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setIsFormOpen(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for Launch Partner Program
                  </h2>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>

                {submitMessage && (
                  <div className={`mb-4 p-3 rounded-lg ${
                    submitMessage.includes('success') 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Venue Name *
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                        errors.venue ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="The Sinclair"
                    />
                    {errors.venue && <p className="text-red-600 text-sm mt-1">{errors.venue}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="john@venue.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="(617) 555-0123"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Best Night of the Week *
                    </label>
                    <select
                      value={formData.bestNight}
                      onChange={(e) => handleInputChange('bestNight', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent ${
                        errors.bestNight ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your busiest night</option>
                      {nightOptions.map(night => (
                        <option key={night} value={night}>{night}</option>
                      ))}
                    </select>
                    {errors.bestNight && <p className="text-red-600 text-sm mt-1">{errors.bestNight}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-purple hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply for Launch Partner Program'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you within 24 hours to discuss next steps
                  </p>
                </form>
              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
} 