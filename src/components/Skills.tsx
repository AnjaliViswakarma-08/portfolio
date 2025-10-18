import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillsProps {
  isDark: boolean;
}

export function Skills({ isDark }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg',
    },
    {
      name: 'Django',
      image: 'https://i0.wp.com/awadhinfo.com/wp-content/uploads/2022/07/simplydjango.jpg?fit=1600%2C900&ssl=1',
    },
    {
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    },
    {
      name: 'Java',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    },
    {
      name: 'MongoDB',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    },
    {
      name: 'Postman',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png',
    },
    {
      name: 'Git',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    },
    {
      name: 'GitHub',
      image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    },
    {
      name: 'HTML',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      name: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      name: 'Tailwind CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    {
      name: 'TypeScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      name: 'REST APIs',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png',
    },
    {
      name: 'NLP',
      image: 'https://cdn-icons-png.flaticon.com/512/9831/9831299.png',
    },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 overflow-hidden relative ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Technical <span className="text-green-500">Skills</span>
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p
              className={`text-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Programming languages, frameworks, and tools I work with
            </p>
            <p
              className={`text-base max-w-2xl ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              I specialize in building robust, scalable applications using a variety of technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full mt-4" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -4200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 12,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative flex-shrink-0 w-64 h-32 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <div className="absolute inset-0">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.4), rgba(46, 125, 50, 0.4))',
                      boxShadow: '0 0 40px rgba(0, 200, 83, 0.6), inset 0 0 40px rgba(0, 200, 83, 0.3)',
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-white font-bold text-2xl text-center px-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />
    </section>
  );
}
