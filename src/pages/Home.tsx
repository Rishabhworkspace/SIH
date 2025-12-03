import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import MotivationalQuote from '../components/MotivationalQuote';
import DailyTip from '../components/DailyTip';

const Home: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mental Health Assessment',
      description: 'Take our comprehensive quiz to understand your current mental state and get personalized recommendations.',
      link: '/quiz',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Stress Relief Games',
      description: 'Engage with calming activities designed to reduce stress and anxiety levels.',
      link: '/game',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Support Resources',
      description: 'Access curated resources, helplines, and professional support when you need it most.',
      link: '/resources',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Your Mental Health
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              {' '}Matters
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A supportive platform designed for higher education students to assess, understand, and improve their mental wellbeing.
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <span>Take Mental Health Quiz</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MotivationalQuote />
        </motion.div>

        {/* Daily Tip and Purpose */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <DailyTip />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-600"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                Our Purpose
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Higher education can be overwhelming. We're here to provide you with tools and resources to maintain your mental wellbeing throughout your academic journey. Remember, seeking help is a sign of strength, not weakness.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center space-x-2 mt-4 text-green-600 dark:text-green-400 group-hover:translate-x-2 transition-transform duration-200">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;