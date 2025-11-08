import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import rohanImage from 'figma:asset/b52022328f45b30e66cf0769908802e7a38d433f.png';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 z-10" />
              <ImageWithFallback
                src={rohanImage}
                alt="Rohan Deshmukh"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate UI/UX designer with a keen eye for detail and a love for creating intuitive, 
                beautiful digital experiences. My design philosophy centers around understanding user needs and 
                translating them into elegant solutions that are both functional and delightful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of experience in the design field, I specialize in creating user-centered interfaces 
                that not only look stunning but also solve real problems. I believe great design is invisible – 
                it just works.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not pushing pixels, you'll find me exploring the latest design trends, mentoring 
                aspiring designers, or enjoying a good cup of coffee while sketching new ideas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
