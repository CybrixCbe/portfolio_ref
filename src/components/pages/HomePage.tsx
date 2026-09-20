import React from 'react';
import { PageId } from '../../types/portfolio';
import { PERSONAL_DETAILS, HIGHLIGHT_METRICS } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* ================= HERO EDITORIAL SECTION ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-2 sm:pt-6">
        
        {/* Left Column: Editorial Headline & Bio */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Editorial Label */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 font-mono text-xs font-normal">[</span>
            <span className="text-[#006257] font-mono text-xs font-semibold tracking-wider uppercase">
              PORTFOLIO // PROFILE &amp; RECONNAISSANCE
            </span>
            <span className="text-zinc-400 font-mono text-xs font-normal">]</span>
          </div>

          {/* Main Typography */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08] font-sans">
              NAVEEN<br />
              <span className="text-zinc-800">KUMAR S</span>
            </h1>
            
            <div className="text-lg sm:text-xl font-bold tracking-tight text-[#006257] font-sans flex items-center gap-2.5 pt-1">
              <span>CYBER SECURITY ANALYST</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#006257]" />
              <span className="text-zinc-500 font-normal text-sm sm:text-base">
                B.Sc. Information Technology
              </span>
            </div>
          </div>

          {/* Professional Resume Introduction */}
          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed max-w-xl font-sans bg-[#f7f6f2] border-l-2 border-[#006257] p-4 rounded-r-xl">
            {PERSONAL_DETAILS.objective}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#006257] hover:bg-[#004a42] text-white font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer group"
            >
              <span>View Projects</span>
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:border-zinc-400 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </div>

          {/* Secondary Social & Direct Links */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-zinc-600 font-medium">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#006257] transition-colors"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ExternalLink size={11} className="text-zinc-400" />
            </a>

            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#006257] transition-colors"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={11} className="text-zinc-400" />
            </a>

            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="inline-flex items-center gap-2 hover:text-[#006257] transition-colors"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Right Column: Layered Editorial Portrait Composition */}
        <div className="lg:col-span-5 relative">
          
          {/* Subtle Layered Backing Card */}
          <div className="absolute -inset-3 bg-[#e8f4f2]/70 rounded-3xl -rotate-1 pointer-events-none" />
          <div className="absolute -inset-1.5 bg-[#f5f2eb] rounded-3xl rotate-1 pointer-events-none" />

          {/* Main Portrait Card */}
          <div className="relative bg-white rounded-2xl border border-[#e6e4dc] p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-5">
            
            {/* Portrait Image Frame */}
            <div className="relative rounded-xl overflow-hidden bg-[#f4f3ef] border border-zinc-200/80 aspect-[4/4.5] shadow-inner">
              <img
                src="/assets/naveen-avatar.jpg"
                alt="Naveen Kumar S — Cyber Security Analyst"
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                loading="eager"
              />
              
              {/* Subtle status tag overlaid on image */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-zinc-200 px-3 py-1 rounded-full shadow-sm flex items-center gap-2 text-xs font-semibold text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-[#006257]" />
                <span>Naveen Kumar S</span>
              </div>
            </div>

            {/* Identity Card Summary */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-900 text-base font-sans">
                    Information Technology Student
                  </div>
                  <div className="text-xs text-zinc-500 font-mono mt-0.5">
                    KPR College of Arts Science and Research
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#e8f4f2] text-[#006257] text-xs font-bold font-mono">
                  8.3 CGPA
                </span>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Cybersecurity', 'Ethical Hacking', 'Python', 'Linux', 'Network Auditing'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-zinc-700 bg-[#f4f3ef] border border-[#e5e3da] px-2.5 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= 4 INFORMATION CARDS (RESUME SUPPORTED) ================= */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            [ KEY PROFILES // ACADEMIC &amp; TECHNICAL ARSENAL ]
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HIGHLIGHT_METRICS.map((metric) => (
            <div key={metric.id} className="bg-white rounded-2xl border border-[#e6e4dc] p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  {metric.label}
                </span>
                <div className="text-xl font-bold text-zinc-900 mt-1 font-sans">
                  {metric.value}
                </div>
                <div className="text-xs text-zinc-600 mt-1 font-sans">
                  {metric.detail}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-mono">Status:</span>
                <span className="text-xs font-bold font-mono text-[#006257] bg-[#e8f4f2] px-2 py-0.5 rounded">
                  {metric.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDITORIAL HIGHLIGHT: PROJECTS & INTERNSHIP TEASER ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* Featured Project Teaser: ReConX */}
        <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#006257] bg-[#e8f4f2] border border-[#b8dfd8] px-2.5 py-0.5 rounded">
              FEATURED PROJECT
            </span>
            <span className="text-xs text-zinc-400 font-mono">01 // RECONX</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-zinc-900 font-sans">
              ReConX – Cybersecurity Web Scanner
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-2 leading-relaxed">
              Full-featured reconnaissance tool leveraging Nmap, WHOIS, and DNS Lookup to analyze scan results, identify security risks, and generate audit reports.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {['Python', 'Flask', 'Nmap', 'WHOIS', 'SQLite'].map((tech) => (
              <span key={tech} className="text-[11px] font-medium text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-semibold text-[#006257] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Project Case Study</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Practical Experience Teaser: Hackup Technology */}
        <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-7 space-y-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-[#006257] bg-[#e8f4f2] border border-[#b8dfd8] px-2.5 py-0.5 rounded">
              PRACTICAL INTERNSHIP
            </span>
            <span className="text-xs text-zinc-400 font-mono">COIMBATORE</span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-zinc-900 font-sans">
              Cyber Security Intern
            </h3>
            <div className="text-xs font-semibold text-zinc-700 font-sans mt-0.5">
              Hackup Technology Pvt. Ltd.
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans mt-2 leading-relaxed">
              Hands-on practical experience in cybersecurity tools and techniques, performing network analysis, traffic inspection, and baseline security assessments.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {['Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite'].map((tool) => (
              <span key={tool} className="text-[11px] font-medium text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                {tool}
              </span>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('experience')}
              className="text-xs font-semibold text-[#006257] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Experience Details</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
