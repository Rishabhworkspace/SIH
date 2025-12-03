import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const tips = [
  "Start your day with 5 minutes of deep breathing exercises.",
  "Keep a gratitude journal and write down 3 things you're thankful for each day.",
  "Take regular breaks from studying - your brain needs rest to function optimally.",
  "Stay hydrated! Aim for 8 glasses of water daily for better focus and mood.",
  "Get 7-9 hours of sleep each night for better emotional regulation.",
  "Practice the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
  "Connect with friends and family regularly - social support is crucial for mental health.",
  "Try progressive muscle relaxation before bed to improve sleep quality.",
  "Limit caffeine intake, especially in the afternoon and evening.",
  "Engage in physical activity for at least 30 minutes daily to boost endorphins.",
  "Practice mindfulness meditation for 10 minutes each day.",
  "Create a dedicated study space that's clean and organized.",
];

const DailyTip: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);

  const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setCurrentTip(randomIndex);
  };

  useEffect(() => {
    getRandomTip();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg">
            <Lightbulb className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
            Daily Wellness Tip
          </h3>
        </div>
        <button
          onClick={getRandomTip}
          className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
          aria-label="Get new tip"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      
      <motion.p
        key={currentTip}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="text-slate-600 dark:text-slate-300 leading-relaxed"
      >
        {tips[currentTip]}
      </motion.p>
    </motion.div>
  );
};

export default DailyTip;