import React, { useEffect } from 'react';
import { HeroSection } from './components/hero';

function App() {
  useEffect(() => {
    // Prevent the browser from automatically restoring the previous scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
    </main>
  );
}

export default App;
