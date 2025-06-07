'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ROICalculatorProps {
  className?: string;
}

export default function ROICalculator({ className = '' }: ROICalculatorProps) {
  const [avgCheckSize, setAvgCheckSize] = useState<number>(75);
  const [coversRedeemed, setCoversRedeemed] = useState<number>(50);
  const [results, setResults] = useState({
    monthlyRevenue: 0,
    yearlyRevenue: 0,
    costOfRewards: 0,
    netRevenue: 0,
    roi: 0
  });

  useEffect(() => {
    // Calculate ROI metrics
    const rewardCost = 12; // Average cost of free drink
    const additionalSpendMultiplier = 2.3; // Users typically spend 2.3x more after initial reward
    
    const monthlyRewardCost = coversRedeemed * rewardCost;
    const monthlyGrossRevenue = coversRedeemed * avgCheckSize * additionalSpendMultiplier;
    const monthlyNetRevenue = monthlyGrossRevenue - monthlyRewardCost;
    const yearlyNetRevenue = monthlyNetRevenue * 12;
    const roiPercentage = monthlyRewardCost > 0 ? ((monthlyNetRevenue / monthlyRewardCost) * 100) : 0;

    setResults({
      monthlyRevenue: monthlyGrossRevenue,
      yearlyRevenue: yearlyNetRevenue,
      costOfRewards: monthlyRewardCost,
      netRevenue: monthlyNetRevenue,
      roi: roiPercentage
    });
  }, [avgCheckSize, coversRedeemed]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much additional revenue Bar Me can generate for your venue
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Venue Details
            </h3>

            <div className="space-y-6">
              {/* Average Check Size */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Average Check Size per Customer
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <input
                    type="number"
                    value={avgCheckSize}
                    onChange={(e) => setAvgCheckSize(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent text-lg"
                    min="0"
                    step="5"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Include drinks, food, and tips
                </p>
              </div>

              {/* Monthly Redemptions */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Expected Monthly Point Redemptions
                </label>
                <input
                  type="number"
                  value={coversRedeemed}
                  onChange={(e) => setCoversRedeemed(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent text-lg"
                  min="0"
                  step="10"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Conservative estimate: 2-5% of app users in your area
                </p>
              </div>

              {/* Slider for visual input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Adjust Monthly Redemptions
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={coversRedeemed}
                  onChange={(e) => setCoversRedeemed(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #6B5BFF 0%, #6B5BFF ${(coversRedeemed / 200) * 100}%, #e5e7eb ${(coversRedeemed / 200) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span>200</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-purple to-purple-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">
              Your Projected Results
            </h3>

            <div className="space-y-6">
              {/* Monthly Revenue */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80 mb-1">Monthly Additional Revenue</div>
                <div className="text-3xl font-bold text-brand-green">
                  {formatCurrency(results.monthlyRevenue)}
                </div>
              </div>

              {/* Cost of Rewards */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80 mb-1">Cost of Rewards</div>
                <div className="text-2xl font-bold">
                  {formatCurrency(results.costOfRewards)}
                </div>
              </div>

              {/* Net Revenue */}
              <div className="bg-brand-green/20 rounded-xl p-4 border border-brand-green/30">
                <div className="text-sm text-white/80 mb-1">Monthly Net Revenue</div>
                <div className="text-3xl font-bold text-brand-green">
                  {formatCurrency(results.netRevenue)}
                </div>
              </div>

              {/* ROI */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80 mb-1">Return on Investment</div>
                <div className="text-2xl font-bold text-brand-green">
                  {results.roi.toFixed(0)}%
                </div>
              </div>

              {/* Yearly Projection */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-sm text-white/80 mb-1">Yearly Net Revenue</div>
                <div className="text-4xl font-bold text-brand-green">
                  {formatCurrency(results.yearlyRevenue)}
                </div>
              </div>
            </div>

            {/* Assumptions */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className="font-semibold mb-3 text-white/90">Assumptions:</h4>
              <ul className="text-sm text-white/80 space-y-1">
                <li>• Users spend 2.3x more after initial reward</li>
                <li>• Average reward cost: $12 per redemption</li>
                <li>• 85% of redeemers become repeat customers</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Generating This Revenue?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our pilot program and see these results in your venue within 30 days
            </p>
            <button className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Apply for Launch Partner Program
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 