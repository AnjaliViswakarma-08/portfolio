import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

export function Certifications({ isDark }: CertificationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Python Essentials',
      issuer: 'CISCO | Python Institute',
      description: 'Comprehensive Python programming fundamentals',
      link: 'https://drive.google.com/drive/folders/14WB9r_0RU5dnEBMVTkPux7bWOjTuQH1A?usp=sharing',
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      description: 'Core AI concepts and practical applications',
      link: 'https://drive.google.com/drive/folders/1pVLEDSbPpnLlo_0MttXo0G_D_ecNXFy2?usp=sharing',
    },
    {
      title: 'AI-ML Training Program',
      issuer: 'IBM SkillsBuild | CSRBOX',
      description: 'Advanced machine learning techniques and implementation',
      link: 'https://drive.google.com/file/d/1NuoFGcmk5LLsgeZtjcOu-cS_Q1tguiNJ/view?usp=sharing',
    },
    {
      title: 'Cybersecurity Analyst Career Path',
      issuer: 'CISCO | Network Academy',
      description: 'Network security and threat analysis fundamentals',
      link: 'https://drive.google.com/file/d/1h9L1F4uc9Qaqz0AO-bYUGEHOtvwe8vlG/view?usp=sharing',
    },
  ];

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-24 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={`text-4xl md:text-5xl font-bold mb-16 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span className="text-green-500">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-2xl shadow-lg transition-all ${
                isDark
                  ? 'bg-gray-700 hover:bg-gray-650'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-green-500 font-medium mb-2 text-sm">
                    {cert.issuer}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {cert.description}
                  </p>
                </div>
              </div>

              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <ExternalLink size={18} />
                Verify Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
