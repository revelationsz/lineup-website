'use client';

import { useState } from 'react';
import { addEmailToLaunchUpdates } from '@/app/actions/waitlist';

interface EmailSignupProps {
  className?: string;
}

export default function EmailSignup({ className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    const { success, error } = await addEmailToLaunchUpdates(email);

    if (success) {
      setIsSubmitted(true);
      setEmail('');
    } else {
      console.error("Failed to add email:", error);
    }

    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-[#E4E4E4] rounded-2xl p-10 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">You&apos;re on the list!</h3>
          <p className="text-[#0A0A0A]/60 mb-4">
            We&apos;ll notify you when we have updates about the app launch and exclusive early access opportunities.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[#0A0A0A] font-medium hover:opacity-70 transition-opacity underline"
          >
            Sign up another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="bg-[#E4E4E4] rounded-2xl p-10 max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">
          Get Launch Updates
        </h3>
        <p className="text-[#0A0A0A]/60 mb-6">
          Be the first to know when we launch in your city and get exclusive early access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-black text-white rounded-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] border-0 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full btn-lime disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Joining...
              </>
            ) : (
              <>
                Join Waitlist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>

        <p className="text-xs text-[#0A0A0A]/40 mt-4">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
