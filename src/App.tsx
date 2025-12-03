// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Game from "./pages/Game";
import Resources from "./pages/Resources";
import Tracker from "./pages/Tracker";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext"; // ✅ FIX: Import ThemeProvider

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/game" element={<Game />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
