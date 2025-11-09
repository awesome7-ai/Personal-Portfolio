import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Figma, PenTool, Palette } from 'lucide-react';

const tools = [
  { name: 'Figma', icon: Figma, color: 'from-purple-500 to-pink-500' },
  { name: 'Adobe XD', icon: PenTool, color: 'from-pink-500 to-rose-500' },
  { name: 'Canva', icon: Palette, color: 'from-cyan-500 to-blue-500' },
];

export function DesignToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tools" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl mb-4 text-gray-900">My Design Tools</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tools and platforms I use to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Tool card - Reduced size */}
                <div className={`relative w-32 h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br ${tool.color} flex flex-col items-center justify-center shadow-2xl transition-all duration-300 group-hover:shadow-3xl`}>
                  <tool.icon className="w-12 h-12 lg:w-14 lg:h-14 text-white mb-2" />
                  <span className="text-white">{tool.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
