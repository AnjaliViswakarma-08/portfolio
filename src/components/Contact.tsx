import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_twynj6p';
      const templateId = 'template_yyeh1i6'; // Replace with your template ID
      const publicKey = 'I_xM22grHMMVOVIiB'; // Replace with your public key

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: `Message from ${formData.name}`,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'workwithanjali.v@gmail.com',
      link: 'mailto:workwithanjali.v@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rourkela, Odisha',
      link: null,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'AnjaliViswakarma-08',
      link: 'https://github.com/AnjaliViswakarma-08',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'anjaliviswakarma08',
      link: 'https://www.linkedin.com/in/anjaliviswakarma08/',
    },
  ];

  return (
    <section
      id="contact"
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
          Get in <span className="text-green-500">Touch</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Connect
            </h3>
            <p
              className={`mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-750'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-700">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p
                        className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}
                      >
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-medium hover:text-green-500 transition-colors ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`font-medium ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl shadow-xl ${
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-green-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-green-500'
                  } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold shadow-lg transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl'
                } text-white`}
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success/Error Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p className="text-sm font-medium">{statusMessage}</p>
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
