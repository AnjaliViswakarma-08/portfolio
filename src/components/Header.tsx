import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors ${
        isDark ? 'bg-gray-900/80' : 'bg-white/80'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          anjali.v
        </motion.h1>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {['About', 'Skills', 'Education', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-green-500 transition-colors ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="/Crack%20TCS.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-green-500/60 px-3 py-2 text-xs font-semibold text-green-500 transition-colors hover:bg-green-500 hover:text-white md:px-4 md:text-sm"
          >
            Let's Crack TCS
          </a>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-900'
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
