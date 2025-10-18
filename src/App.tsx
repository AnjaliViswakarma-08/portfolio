import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen transition-colors">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Education isDark={isDark} />
        <Projects isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
