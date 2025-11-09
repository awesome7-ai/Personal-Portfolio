import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useCallback } from 'react';

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent | React.TouchEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    const sectionId = href.substring(1);
    scrollToSection(sectionId);
  }, [scrollToSection]);

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-300">
              © {new Date().getFullYear()} Rohan Deshmukh | Designed with 💙 in Pune.
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            onTouchEnd={scrollToTop}
            type="button"
            style={{ 
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer'
            }}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 active:bg-white/30 transition-all duration-300"
          >
            <span className="text-sm">Back to Top</span>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </button>
        </div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            onTouchEnd={(e) => handleNavClick(e, '#about')}
            style={{ 
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer'
            }}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, '#projects')}
            onTouchEnd={(e) => handleNavClick(e, '#projects')}
            style={{ 
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer'
            }}
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            onTouchEnd={(e) => handleNavClick(e, '#contact')}
            style={{ 
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              cursor: 'pointer'
            }}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
