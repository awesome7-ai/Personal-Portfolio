import { motion } from 'motion/react';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCallback } from 'react';

export function HeroSection() {
  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleDownloadResume = useCallback(() => {
    window.open('https://drive.google.com/uc?export=download&id=13RXkkftGOArZG6xe82lvlbTekeiDQWsn', '_blank');
  }, []);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#fff5f7] to-[#fef8f3]">
      {/* Animated geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200 to-cyan-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text content */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm"
            >
              <p className="text-sm text-gray-600">👋 Welcome to my portfolio</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl mb-6 text-gray-900"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rohan Deshmukh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              A UI/UX Designer passionate about creating user-centered experiences that delight and inspire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 rounded-full px-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                onClick={scrollToProjects}
                onTouchEnd={scrollToProjects}
                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-gray-300 hover:bg-white hover:border-gray-400 rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleDownloadResume}
                onTouchEnd={handleDownloadResume}
                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
              });
            }
          }}
          onTouchEnd={() => {
            const element = document.getElementById('about');
            if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
              });
            }
          }}
          style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
        >
          <span className="text-sm text-gray-500">Scroll down</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
