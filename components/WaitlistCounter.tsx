'use client';

import { useState, useEffect } from 'react';
import { getWaitlistCount } from '@/app/actions/waitlist';
import { supabase } from "@/lib/supabase-client"


interface WaitlistCounterProps {
  className?: string;
}

export default function WaitlistCounter({ className = '' }: WaitlistCounterProps) {
  const [targetCount, setTargetCount] = useState(0); // default fallback
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  // Fetch real count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const { count: realCount, error } = await getWaitlistCount();
        setTargetCount(realCount);
        if (error) {
          console.warn('Waitlist count fetch warning:', error);
        }
      } catch (error) {
        console.error('Failed to fetch waitlist count:', error);
        // Keep default fallback
      } finally {
        setIsLoading(false);
      }
    };
    fetchCount();
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't animate until we have the real count
    
    setIsAnimating(true);
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetCount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  }, [targetCount, isLoading]);

  return (
    <div className={`text-center ${className}`}>
      <div className="glass-card p-8 rounded-2xl glow inline-block">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-gray-300">People on waitlist:</span>
          </div>
          
          <div className="text-4xl md:text-5xl font-bold gradient-text">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin inline-block"></div>
            ) : (
              <>
                {count.toLocaleString()}
                {isAnimating && <span className="animate-pulse">+</span>}
              </>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-400 mt-2">
          Join thousands already waiting for launch!
        </p>
      </div>
    </div>
  );
} 