import React from 'react';
import { Heart, Github, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800 dark:text-white">MindCare</span>
          </div>

          {/* Hackathon Badge */}
          <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800">
            <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <span className="font-semibold text-orange-700 dark:text-orange-300">
              Made for Smart India Hackathon 2025
            </span>
          </div>

          {/* Description */}
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl">
            Empowering higher education students with tools and resources for better mental health and wellbeing. 
            Your mental health matters, and help is always available.
          </p>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span>Source Code</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 w-full">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              © 2025 MindCare. Built with ❤️ for student mental health awareness.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;