import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import dxSportsImage from 'figma:asset/927512b37cc488af79fd342416230b3ae3b9f8aa.png';
import lokplaazaImage from 'figma:asset/6fd438748caf464302f7da8ef1288b36b95da1cc.png';
import skilliooGif from 'figma:asset/9aad8509a311bcc0bdda3479d6b2518efaa39539.png';
import fitwatchImage from 'figma:asset/0273837296540fb95c8ff4900ccc90e3fdc8d283.png';

const projects = [
  {
    id: 1,
    title: 'DX Sports App & Admin Panel - One Stop Solution for Upskilling',
    categories: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: dxSportsImage,
  },
  {
    id: 2,
    title: 'Lokplaaza Furniture Website Redesign',
    categories: ['UI/UX Design', 'Web Design', 'Wireframe'],
    image: lokplaazaImage,
  },
  {
    id: 3,
    title: 'Skillioo - The Talent Hub',
    categories: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: skilliooGif,
  },
  {
    id: 4,
    title: 'Fitwatch - A Smartwatch Application',
    categories: ['UI/UX Design', 'Web Design', 'Wireframe'],
    image: fitwatchImage,
    link: 'https://www.figma.com/deck/cnmBvQSdGaDalcxyUdQXJ3',
  },
];

interface ProjectsSectionProps {
  onViewAll?: () => void;
}

export function ProjectsSection({ onViewAll }: ProjectsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        >
          <div>
            <p className="text-sm text-gray-500 mb-3">My Portfolio</p>
            <h2 className="text-4xl lg:text-5xl text-gray-900">
              My Latest <span className="text-orange-500">Projects</span>
            </h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewAll}
            className="self-start lg:self-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                } else {
                  toast.info('Coming Soon');
                }
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
                      className="px-4 py-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-sm rounded-full"
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
