import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, MessageSquare, Users, Zap, Ear } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const softSkills = [
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Teamwork', icon: Users },
    { name: 'Adaptability', icon: Zap },
    { name: 'Active Listening', icon: Ear },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            About <span className="text-green-500">Me</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg leading-relaxed mb-12 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <p className="mb-4">
              I'm a passionate software developer with a strong foundation in computer science and a love for building scalable, user-friendly applications. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
            </p>
            <p className="mb-4">
              With expertise in full-stack development, I thrive on creating seamless experiences from backend architecture to intuitive frontend interfaces. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of innovation.
            </p>
            <p>
              Beyond technical skills, I value collaboration, clear communication, and adaptability. I'm always excited to work with teams that share a passion for excellence and making a positive impact through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className={`text-2xl font-semibold mb-6 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl text-center transition-all ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-white hover:bg-gray-50'
                    } shadow-md`}
                  >
                    <Icon className="mx-auto mb-2 text-green-500" size={32} />
                    <p
                      className={`text-sm font-medium ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
