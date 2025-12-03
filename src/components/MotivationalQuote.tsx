import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "It's okay to ask for help. You are not alone.",
  "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
  "Progress, not perfection. Every small step counts.",
  "You are stronger than you think and more capable than you believe.",
  "Healing is not linear. Be patient with yourself.",
  "Your current situation is not your final destination.",
  "Taking care of yourself is not selfish, it's necessary.",
  "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious.",
];

const MotivationalQuote: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute top-4 left-4 opacity-20">
        <Quote className="h-12 w-12 text-green-600 dark:text-green-400" />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">
            "{quotes[currentQuote]}"
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-6 space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentQuote
                ? 'bg-green-500 dark:bg-green-400'
                : 'bg-slate-300 dark:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MotivationalQuote;