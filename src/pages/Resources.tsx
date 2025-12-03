import React, { useState } from 'react';
import { ExternalLink, Phone, MessageCircle, BookOpen, Video, Headphones, Users, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'meditation', name: 'Meditation', icon: Headphones },
    { id: 'lifestyle', name: 'Lifestyle', icon: Users },
    { id: 'professional', name: 'Professional Help', icon: AlertCircle },
    { id: 'emergency', name: 'Emergency', icon: Phone }
  ];

  const resources = [
    // Meditation Resources
    {
      category: 'meditation',
      title: 'Headspace',
      description: 'Guided meditations, sleep stories, and mindfulness exercises designed for students.',
      url: 'https://headspace.com',
      type: 'App/Website',
      icon: Headphones,
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400'
    },
    {
      category: 'meditation',
      title: 'Calm',
      description: 'Sleep stories, breathing programs, and relaxing music to reduce stress and anxiety.',
      url: 'https://calm.com',
      type: 'App/Website',
      icon: Headphones,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
    },
    {
      category: 'meditation',
      title: 'Insight Timer',
      description: 'Free meditation app with thousands of guided meditations and timer features.',
      url: 'https://insighttimer.com',
      type: 'Free App',
      icon: Headphones,
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400'
    },

    // Lifestyle Resources
    {
      category: 'lifestyle',
      title: 'Student Mental Health Collective',
      description: 'Resources and support specifically for college and university students.',
      url: 'https://smhcollective.org',
      type: 'Website',
      icon: Users,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
    },
    {
      category: 'lifestyle',
      title: 'Active Minds',
      description: 'Organization focused on mental health awareness and education for students.',
      url: 'https://activeminds.org',
      type: 'Organization',
      icon: Users,
      color: 'bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400'
    },
    {
      category: 'lifestyle',
      title: 'Sleep Foundation',
      description: 'Evidence-based information on sleep hygiene and improving sleep quality.',
      url: 'https://sleepfoundation.org',
      type: 'Educational',
      icon: BookOpen,
      color: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400'
    },

    // Professional Help
    {
      category: 'professional',
      title: 'Psychology Today Therapist Finder',
      description: 'Find licensed therapists, counselors, and mental health professionals in your area.',
      url: 'https://psychologytoday.com/therapists',
      type: 'Directory',
      icon: Users,
      color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
    },
    {
      category: 'professional',
      title: 'BetterHelp',
      description: 'Online counseling and therapy services with licensed professionals.',
      url: 'https://betterhelp.com',
      type: 'Online Therapy',
      icon: Video,
      color: 'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400'
    },
    {
      category: 'professional',
      title: 'NAMI - National Alliance on Mental Illness',
      description: 'Support groups, education, and advocacy for mental health conditions.',
      url: 'https://nami.org',
      type: 'Organization',
      icon: Users,
      color: 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400'
    },

    // Emergency Resources
    {
      category: 'emergency',
      title: '988 Suicide & Crisis Lifeline',
      description: '24/7, free and confidential support for people in distress.',
      url: 'tel:988',
      type: 'Hotline',
      icon: Phone,
      color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400',
      isUrgent: true
    },
    {
      category: 'emergency',
      title: 'Crisis Text Line',
      description: 'Text HOME to 741741 for 24/7 crisis support via text message.',
      url: 'sms:741741',
      type: 'Text Support',
      icon: MessageCircle,
      color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400',
      isUrgent: true
    },
    {
      category: 'emergency',
      title: 'National Sexual Assault Hotline',
      description: 'RAINN\'s 24/7 hotline for survivors of sexual violence.',
      url: 'tel:8006564673',
      type: 'Hotline',
      icon: Phone,
      color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400',
      isUrgent: true
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Mental Health Resources
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Carefully curated resources to support your mental health journey. Find apps, articles, professional help, and emergency support.
          </p>
        </motion.div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 mb-8 text-white text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="h-8 w-8 mr-3" />
            <h2 className="text-xl font-bold">Need Immediate Help?</h2>
          </div>
          <p className="mb-4">If you're having thoughts of self-harm or are in crisis, please reach out immediately:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:988"
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              <span>Call 988</span>
            </a>
            <a
              href="sms:741741"
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Text 741741</span>
            </a>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 border border-slate-200 dark:border-slate-600 hover:border-green-300 dark:hover:border-green-600'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={`${resource.category}-${resource.title}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                resource.isUrgent ? 'ring-2 ring-red-500 ring-opacity-50' : ''
              }`}
            >
              {resource.isUrgent && (
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  URGENT HELP
                </div>
              )}
              
              <div className={`inline-flex p-3 rounded-xl ${resource.color} mb-4`}>
                <resource.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                {resource.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                  {resource.type}
                </span>
                
                <a
                  href={resource.url}
                  target={resource.url.startsWith('http') ? '_blank' : '_self'}
                  rel={resource.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center space-x-2 font-medium transition-all duration-200 group ${
                    resource.isUrgent
                      ? 'text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300'
                      : 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300'
                  }`}
                >
                  <span>{resource.url.startsWith('tel:') ? 'Call' : resource.url.startsWith('sms:') ? 'Text' : 'Visit'}</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl"
        >
          <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3 text-center">
            Important Disclaimer
          </h3>
          <p className="text-blue-600 dark:text-blue-400 text-center text-sm leading-relaxed">
            These resources are provided for informational purposes only and do not constitute medical advice. 
            Always consult with qualified healthcare professionals for personalized treatment recommendations. 
            If you're experiencing a mental health emergency, please contact emergency services immediately.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;