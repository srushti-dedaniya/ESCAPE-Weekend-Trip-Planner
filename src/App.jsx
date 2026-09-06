import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discover from './components/Discover';
import HowItWorks from './components/HowItWorks';
import WeekendPicks from './components/WeekendPicks';
import CuratedMoods from './components/CuratedMoods';
import MoodSelector from './components/MoodSelector';
import EscapeMatch from './components/EscapeMatch';
import EscapeFilter from './components/EscapeFilter';
import DestinationGrid from './components/DestinationGrid';
import WeekendPreview from './components/WeekendPreview';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { moods } from './data/moods';

function App() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBudget, setActiveBudget] = useState('₹₹ Balanced');
  const [activeDistance, setActiveDistance] = useState('2–4 Hrs');

  const handleMoodSelect = useCallback((mood) => {
    setSelectedMood(mood);
  }, []);

  const handleFindEscapeClick = useCallback(() => {
    document.getElementById('mood-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full text-on-surface overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
          <Hero onFindEscapeClick={handleFindEscapeClick} />
          <Discover />
          <HowItWorks />
          <WeekendPicks />
          <CuratedMoods />
          <MoodSelector selectedMood={selectedMood} onMoodSelect={handleMoodSelect} />
          <EscapeMatch selectedMood={selectedMood} />
          <EscapeFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            activeBudget={activeBudget}
            onBudgetChange={setActiveBudget}
            activeDistance={activeDistance}
            onDistanceChange={setActiveDistance}
          />
          <DestinationGrid
            activeCategory={activeCategory}
            activeBudget={activeBudget}
            activeDistance={activeDistance}
          />
          <WeekendPreview />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;