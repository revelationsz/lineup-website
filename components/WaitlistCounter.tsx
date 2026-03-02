'use client';

import { useState, useEffect } from 'react';
import { getWaitlistCount } from '@/app/actions/waitlist';

interface WaitlistCounterProps {
  className?: string;
}

export default function WaitlistCounter({ className = '' }: WaitlistCounterProps) {
  const [targetCount, setTargetCount] = useState(0);
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    };
    fetchCount();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    setIsAnimating(true);
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

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
    <div className={className}>
      <div className="display-text text-5xl md:text-6xl text-white mb-2">
        {isLoading ? (
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block"></div>
        ) : (
          <>
            {count.toLocaleString()}
            {isAnimating && <span className="animate-pulse">+</span>}
          </>
        )}
      </div>
      <p className="text-white/50 text-lg">Users</p>
    </div>
  );
}
