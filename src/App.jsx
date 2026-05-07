import React, { useState } from 'react';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import LogoSection from './sections/LogoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStack from './sections/TechStack.jsx';
import Testimonials from './sections/Testimonials.jsx';
import About from './sections/About.jsx';
import WelcomeScreen from './sections/WelcomeScreen.jsx'; // pastikan ini ada
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <NavBar />
          <Hero />
          <About />

          <section id="work">
            <ShowcaseSection />
          </section>

          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Testimonials />
        </>
      )}
    </>
  );
};

export default App;
