import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: 'https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2MjI4OTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Rohan transformed our product with his exceptional design skills. His attention to detail and user-centered approach resulted in a 40% increase in user engagement.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO at StartupHub',
    image: 'https://images.unsplash.com/photo-1561731885-e0591a34659c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjIzMDI3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Working with Rohan was a game-changer. He understood our vision and delivered designs that exceeded our expectations. Highly professional and creative!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Lead at Creative Co',
    image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyMjQ0NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Rohan\'s designs are not just beautiful—they\'re functional and intuitive. His ability to balance aesthetics with usability is truly impressive.',
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Quote className="absolute top-20 left-10 w-32 h-32 text-blue-600" />
        <Quote className="absolute bottom-20 right-10 w-40 h-40 text-purple-600 rotate-180" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by amazing people and companies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Quote text */}
                <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Client info */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-30" />
                    <ImageWithFallback
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
