import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_DETAILS } from '../../data/resumeData';
import { PageId } from '../../types/portfolio';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f6f5f0] border-t border-[#e6e4dc] mt-24 pt-14 pb-10 text-zinc-600 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#e6e4dc]">
          {/* Identity Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#006257] text-white flex items-center justify-center font-bold text-xs">
                NK
              </div>
              <div>
                <span className="font-bold text-zinc-900 tracking-tight text-sm">
                  {PERSONAL_DETAILS.fullName}
                </span>
                <span className="text-zinc-500 text-xs block">
                  {PERSONAL_DETAILS.role} &bull; B.Sc. Information Technology
                </span>
              </div>
            </div>

            <p className="text-zinc-600 text-xs leading-relaxed max-w-md font-sans">
              Information Technology student at KPR College with a focus on cybersecurity, vulnerability analysis, reconnaissance tooling, and practical software engineering.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e6e4dc] text-[#006257] text-[11px] font-medium shadow-sm">
              <CheckCircle2 size={13} className="text-[#006257]" />
              <span>Resume-Verified Credentials &bull; 0% Exaggeration</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <div className="text-zinc-900 font-bold tracking-wider uppercase text-[11px] font-mono">
              Navigation
            </div>
            <ul className="space-y-2 text-zinc-600">
              {(['home', 'projects', 'about', 'experience', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="hover:text-[#006257] transition-colors capitalize text-xs cursor-pointer"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Comms */}
          <div className="space-y-3">
            <div className="text-zinc-900 font-bold tracking-wider uppercase text-[11px] font-mono">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="flex items-center gap-2 hover:text-[#006257] transition-colors truncate"
              >
                <Mail size={13} className="text-[#006257] shrink-0" />
                <span className="truncate">{PERSONAL_DETAILS.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#006257] transition-colors"
              >
                <Phone size={13} className="text-[#006257] shrink-0" />
                <span>{PERSONAL_DETAILS.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-600">
                <MapPin size={13} className="text-[#006257] shrink-0" />
                <span>{PERSONAL_DETAILS.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_DETAILS.fullName}. Built with React, TypeScript &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-lg bg-white border border-[#e6e4dc] flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-sm"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-lg bg-white border border-[#e6e4dc] flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-sm"
            >
              <LinkedinIcon size={15} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg bg-white border border-[#e6e4dc] flex items-center justify-center text-zinc-600 hover:text-[#006257] hover:border-zinc-300 transition-colors ml-2 shadow-sm cursor-pointer"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
