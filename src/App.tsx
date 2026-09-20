import { useState, useEffect } from 'react';
import { PageId } from './types/portfolio';
import { HeaderHUD } from './components/layout/HeaderHUD';
import { Navigation } from './components/layout/Navigation';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { MatrixBackground } from './components/common/MatrixBackground';

import { HomePage } from './components/pages/HomePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { ContactPage } from './components/pages/ContactPage';

export function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'projects', 'about', 'experience', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-zinc-900 relative selection:bg-[#006257]/10 selection:text-[#006257] overflow-x-hidden w-full max-w-full">
      {/* Subtle Light Editorial Grid Background */}
      <MatrixBackground />

      {/* Top Editorial Status Strip */}
      <HeaderHUD />

      {/* Primary Clean Navigation */}
      <Navigation
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileNavOpen(true)}
      />

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={isMobileNavOpen}
        activePage={activePage}
        onNavigate={handleNavigate}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-10 relative z-10 overflow-x-hidden">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'projects' && <ProjectsPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'experience' && <ExperiencePage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
