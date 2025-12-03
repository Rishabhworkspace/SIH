import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";
import { addTask } from "../utils/trackerStorage";

interface LocationState {
  totalScore: number;
  totalQuestions: number;
}

const Results: React.FC = () => {
  const location = useLocation();
  const { totalScore, totalQuestions } =
    (location.state as LocationState) || {
      totalScore: 0,
      totalQuestions: 4,
    };

  const getRecommendations = (score: number) => {
    if (score >= 20 && score <= 40) {
      return {
        level: "Low Distress",
        icon: CheckCircle,
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-800",
        title: "Your mental health appears stable.",
        description:
          "You're doing well overall. Here are a few short, high-quality practices you can try:",
        resources: [
          {
            name: "4-7-8 Breathing Timer (Calm)",
            url: "https://www.calm.com/breathing",
          },
          {
            name: "10-min Meditation (Headspace)",
            url: "https://www.headspace.com/meditation/meditation-for-beginners",
          },
          {
            name: "Gratitude Journal (Interactive)",
            url: "https://gratefulness.me/",
          },
        ],
      };
    } else if (score >= 41 && score <= 70) {
      return {
        level: "Moderate Distress",
        icon: AlertTriangle,
        color: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
        title: "You may be experiencing stress or burnout.",
        description:
          "Consider these focused practices and resources to help rebalance:",
        resources: [
          { name: "Stress-Buster Game", url: "/game" },
          {
            name: "5-min Guided Meditation",
            url: "https://www.youtube.com/watch?v=inpok4MKVLM",
          },
          {
            name: "Morning Yoga Flow (10 min)",
            url: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
          },
          {
            name: "Box Breathing Exercise",
            url: "https://www.healthline.com/health/box-breathing",
          },
        ],
      };
    } else {
      return {
        level: "High Distress",
        icon: AlertCircle,
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-100 dark:bg-red-900/20",
        borderColor: "border-red-200 dark:border-red-800",
        title: "You may need additional support.",
        description:
          "Please reach out for professional help. These trusted resources can help you immediately:",
        resources: [
          { name: "NIMHANS Helpline (India): 080-4611 0007", url: "tel:08046110007" },
          {
            name: "Vandrevala Helpline: 1860 2662 345",
            url: "tel:18602662345",
          },
          { name: "Suicide Prevention Lifeline (US) - 988", url: "tel:988" },
          {
            name: "Crisis Text Line - Text HOME to 741741",
            url: "https://www.crisistextline.org/",
          },
        ],
      };
    }
  };

  const recommendations = getRecommendations(totalScore);
  const percentage = Math.round((totalScore / (totalQuestions * 5)) * 100);

  // Save recommended tasks into tracker
  React.useEffect(() => {
    recommendations.resources.forEach((resource) => {
      addTask({
        id: crypto.randomUUID(),
        name: resource.name,
        days: 7,
        completed: Array(7).fill(false),
      });
    });
  }, [totalScore]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Your Assessment Results
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Based on your responses, here are personalized recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${recommendations.bgColor} ${recommendations.borderColor} border-2 rounded-2xl p-8 mb-8`}
        >
          <div className="text-center">
            <h2 className={`text-2xl font-bold ${recommendations.color} mb-2`}>
              {recommendations.level} Mental Health Status
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg mb-4">
              Score: {totalScore}/{totalQuestions * 5} ({percentage}%)
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {recommendations.title}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-600 mb-8"
        >
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
            Personalized Recommendations
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {recommendations.description}
          </p>

          <div className="grid gap-4">
            {recommendations.resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-all"
              >
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {resource.name}
                </span>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/quiz"
            className="flex items-center justify-center space-x-2 bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Retake Assessment</span>
          </Link>

          <Link
            to="/tracker"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold"
          >
            <span>Go to Tracker</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
