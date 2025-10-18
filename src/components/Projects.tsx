import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

export function Projects({ isDark }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Smart Examination Preparation Assistant',
      description:
        'Full-stack exam preparation platform with flashcards, mock tests, and progress tracking. Built with modern technologies for optimal learning experience.',
      tech: ['React', 'TypeScript', 'Django', 'MongoDB Atlas', 'Tailwind CSS', 'NLP'],
      github: 'https://github.com/AnjaliViswakarma-08',
      demo: null,
    },
    {
      title: 'Student Management System',
      description:
        'Java-based CRUD application with file-based persistence using OOP principles. Manages student records with efficient data handling.',
      tech: ['Core Java', 'File Handling', 'OOP'],
      github: 'https://github.com/AnjaliViswakarma-08',
      demo: null,
    },
    {
      title: 'Library Management System',
      description:
        'Comprehensive library management solution with book tracking, user management, and transaction handling using core Java.',
      tech: ['Core Java', 'File Handling', 'CRUD Operations'],
      github: 'https://github.com/AnjaliViswakarma-08',
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Featured <span className="text-green-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all ${
                isDark ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-700" />

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 transition-all ${
                        isDark
                          ? 'border-green-500 text-green-500 hover:bg-green-500/10'
                          : 'border-green-600 text-green-600 hover:bg-green-50'
                      }`}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
