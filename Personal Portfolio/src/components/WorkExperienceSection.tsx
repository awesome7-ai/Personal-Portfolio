import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Check } from 'lucide-react';

const experiences = [
  {
    company: 'ContriveLabs, Bangalore',
    role: 'UI/UX Design Intern',
    tenure: 'June 2024 - July 2024',
  },
  {
    company: 'Digitech IT Solutions',
    role: 'UI/UX Design Intern',
    tenure: 'Jan 2025 - Feb 2025',
  },
  {
    company: 'Freelance (Dazznix.AI)',
    role: 'UI/UX Design Intern',
    tenure: 'Feb 2025 - Aug 2025',
  },
  {
    company: 'MITRA Consultancy',
    role: 'UI/UX Design Intern',
    tenure: 'Aug 2025 - Nov 2025',
  },
];

export function WorkExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
              <Briefcase className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" style={{ stroke: 'url(#briefcase-gradient)' }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="briefcase-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-4xl text-gray-900">Work Experience</h2>
          </div>
          <p className="text-gray-600 max-w-2xl">
            My professional journey designing intuitive and engaging digital experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl text-gray-900 mb-2">
                    {experience.company}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {experience.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {experience.tenure}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Growing and learning every day
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
