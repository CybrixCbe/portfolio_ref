import React from 'react';
import { PageId } from '../../types/portfolio';
import { Menu } from 'lucide-react';

interface NavigationProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenMobileMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activePage,
  onNavigate,
  onOpenMobileMenu
}) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#e6e4dc] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006257] rounded-lg p-0.5"
        >
          <div className="w-9 h-9 rounded-xl bg-[#006257] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#004a42] transition-colors shrink-0">
            NK
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold tracking-tight text-zinc-900 group-hover:text-[#006257] transition-colors truncate">
              Naveen Kumar S
            </span>
            <span className="text-[11px] text-zinc-500 font-medium tracking-normal truncate">
              Cyber Security Analyst
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f5f4f0] border border-[#e6e4dc] p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-normal transition-all duration-200 ${
                  isActive
                    ? 'text-zinc-900 bg-white shadow-sm font-bold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#006257] hover:bg-[#004a42] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Hire Me
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={onOpenMobileMenu}
            aria-label="Open mobile navigation menu"
            className="md:hidden w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[#006257] shrink-0 cursor-pointer"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
