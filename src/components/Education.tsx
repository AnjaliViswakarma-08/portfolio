import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

export function Education({ isDark }: EducationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      institution: 'Government College of Engineering, Keonjhar',
      degree: 'B.Tech in Computer Science',
      period: '2022 – Present',
      grade: 'GPA: 7.88',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/GCE_Keonjhar.png/640px-GCE_Keonjhar.png',
      certificateLink: null,
    },
    {
      institution: "St. Paul's School",
      degree: 'Intermediate',
      period: '2021 – 2022',
      grade: '88%',
      image: 'https://skoodos.com/public/uploads/optimized/1651746437.png',
      certificateLink: 'https://drive.google.com/file/d/127x-hOJtGxQDwaRbu7AP2hLbmcBKUp5W/view?usp=sharing',
    },
    {
      institution: 'Guru Tech Bahadur High School',
      degree: 'Matriculation',
      period: '2019 – 2020',
      grade: '90%',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4_SBZtt0y_bWmO8wWrRwa_kTlDCkvsJFeg&s',
      certificateLink: 'https://drive.google.com/file/d/1XXzOKVgETlmc3PLT35z6RZP--omAVJ03/view?usp=sharing',
    },
  ];

  const handleCardClick = (certificateLink: string | null) => {
    if (certificateLink) {
      window.open(certificateLink, '_blank');
    }
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-16 px-8"
      style={{
        background: isDark ? '#0B1221' : '#f8f9fa',
      }}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          <p
            className={`text-lg mb-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            My academic background and qualifications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleCardClick(edu.certificateLink)}
              className={`relative rounded-2xl overflow-hidden shadow-2xl group ${
                edu.certificateLink ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{
                minHeight: '400px',
              }}
            >
              <div className="absolute inset-0">
                <img
                  src={edu.image}
                  alt={edu.institution}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex-shrink-0">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                      {edu.institution}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-200 font-semibold mb-2 text-base">
                  {edu.degree}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-green-400" />
                  <span className="text-gray-300 text-sm">{edu.period}</span>
                </div>

                <div className="inline-block">
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg">
                    {edu.grade}
                  </span>
                </div>

                {edu.certificateLink && (
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-green-400 text-xs font-semibold">
                      Click to view certificate →
                    </p>
                  </div>
                )}
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(0, 200, 83, 0.3)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
