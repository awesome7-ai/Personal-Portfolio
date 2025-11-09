import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NavigationProps {
  onContactClick?: () => void;
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onContactClick) {
      onContactClick();
    } else {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        const element = document.getElementById('contact');
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="text-2xl text-gray-900 relative group cursor-pointer bg-transparent border-none"
            style={{ 
              touchAction: 'manipulation', 
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            aria-label="Scroll to top"
          >
            Rohan
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">.</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* CTA Button - All Screen Sizes */}
          <motion.button
            onClick={scrollToContact}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow duration-300 cursor-pointer border-none outline-none"
            style={{ 
              touchAction: 'manipulation', 
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            aria-label="Scroll to contact section"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
