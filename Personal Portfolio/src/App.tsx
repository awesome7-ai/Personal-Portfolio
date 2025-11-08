import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkExperienceSection } from './components/WorkExperienceSection';
import { DesignToolsSection } from './components/DesignToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LiveProjectsSection } from './components/LiveProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AllProjectsPage } from './components/AllProjectsPage';

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  const handleNavigateToContact = () => {
    if (showAllProjects) {
      // If on All Projects page, go back to home and scroll to contact
      setShowAllProjects(false);
      setScrollToContact(true);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById('contact');
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    if (scrollToContact && !showAllProjects) {
      // Wait for the page to render, then scroll to contact
      const timer = setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
        setScrollToContact(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToContact, showAllProjects]);

  if (showAllProjects) {
    return (
      <div className="min-h-screen">
        <Navigation onContactClick={handleNavigateToContact} />
        <AllProjectsPage onBack={() => setShowAllProjects(false)} />
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={handleNavigateToContact} />
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <DesignToolsSection />
      <ProjectsSection onViewAll={() => setShowAllProjects(true)} />
      <LiveProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
