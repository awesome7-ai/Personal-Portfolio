import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import leherImage from 'figma:asset/cebe5fcd15d3b91959bdce0ac1b6c316bbd706f5.png';

const liveProjects = [
  {
    id: 1,
    title: 'Leher - Drone Spraying Services (Redesign)',
    categories: ['UI/UX Design', 'Web Design', 'Development'],
    image: leherImage,
    link: 'https://www.leher.ag/',
  },
];

export function LiveProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="live-projects" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm text-gray-500 mb-3">Live on the Web</p>
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            Live <span className="text-emerald-500">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {liveProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              onClick={() => {
                window.open(project.link, '_blank', 'noopener,noreferrer');
              }}
            >
              {/* Project Image */}
              <div className="relative h-[450px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-8 relative">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl text-gray-900 pr-12">
                  {project.title}
                </h3>

                {/* Arrow Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
