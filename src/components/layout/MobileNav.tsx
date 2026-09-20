import React from 'react';
import { PageId } from '../../types/portfolio';
import { X, Home, FolderGit2, User, Briefcase, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_DETAILS } from '../../data/resumeData';

interface MobileNavProps {
  isOpen: boolean;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  activePage,
  onNavigate,
  onClose
}) => {
  if (!isOpen) return null;

  const navItems: { id: PageId; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} />, desc: 'Profile & Overview' },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={18} />, desc: 'ReConX & MorseVision' },
    { id: 'about', label: 'About', icon: <User size={18} />, desc: 'Education & Core Skills' },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} />, desc: 'Internship & Certifications' },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} />, desc: 'Get in Touch' }
  ];

  return (
    <div className="fixed inset-0 z-50 md:hidden flex justify-end">
      {/* Soft Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-[85%] max-w-sm h-full bg-white border-l border-[#e6e4dc] p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#006257] text-white flex items-center justify-center font-bold text-xs">
                NK
              </div>
              <span className="font-bold text-sm tracking-tight text-zinc-900">
                Menu
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="mt-6 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                    isActive
                      ? 'bg-[#e8f4f2] border border-[#b8dfd8] text-[#006257] font-semibold'
                      : 'bg-zinc-50 border border-zinc-100 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isActive ? 'bg-[#006257] text-white' : 'bg-white text-zinc-600 border border-zinc-200'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer & Status */}
        <div className="mt-8 pt-4 border-t border-zinc-200 flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-zinc-600">
            <span>Status:</span>
            <span className="text-[#006257] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#006257]" />
              Available for Opportunities
            </span>
          </div>

          <a
            href={PERSONAL_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950 flex items-center justify-center gap-2"
          >
            <span>GitHub Profile</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="w-full py-3 rounded-xl bg-[#006257] hover:bg-[#004a42] text-white text-xs font-semibold tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            Contact Naveen
          </button>
        </div>
      </div>
    </div>
  );
};
