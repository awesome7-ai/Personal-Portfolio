import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Search, Workflow, Monitor } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Creating beautiful, pixel-perfect interfaces that captivate users and elevate brand identity.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Search,
    title: 'UX Research',
    description: 'Deep user research and testing to understand behavior and validate design decisions.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Prototyping',
    description: 'Interactive prototypes that bring ideas to life and facilitate stakeholder feedback.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Responsive web experiences that work seamlessly across all devices and platforms.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Glassmorphism effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
