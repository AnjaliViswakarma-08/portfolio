import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-green-700/20" />

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-500/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
          >
            Anjali Viswakarma
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-2xl md:text-3xl font-semibold mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Software Development Engineer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Passionate developer skilled in Java, Python, and full-stack development using React, Django, and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://drive.google.com/file/d/1YyKFVX0HOUEgE3fI0k3uZZvmNKQ9oKfD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-colors ${
                isDark
                  ? 'border-green-500 text-green-500 hover:bg-green-500/10'
                  : 'border-green-600 text-green-600 hover:bg-green-50'
              }`}
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
