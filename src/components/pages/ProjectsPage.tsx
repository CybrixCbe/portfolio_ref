import React, { useState } from 'react';
import { PROJECTS_DATA, PERSONAL_DETAILS } from '../../data/resumeData';
import { useMorseAudio } from '../../hooks/useMorseAudio';
import {
  CheckCircle2,
  Layers,
  X,
  Copy,
  Check,
  Volume2,
  Search,
  ArrowUpRight
} from 'lucide-react';

const MORSE_MAP: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
  G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..',
  M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.',
  S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [morseInput, setMorseInput] = useState('CYBERSECURITY');
  const [copied, setCopied] = useState(false);
  const { playBeep } = useMorseAudio();

  const textToMorse = (text: string) => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => MORSE_MAP[char] || char)
      .join(' ');
  };

  const morseOutput = textToMorse(morseInput);

  const handlePlayMorse = () => {
    const symbols = morseOutput.split('');
    let delay = 0;

    symbols.forEach((sym) => {
      if (sym === '.') {
        setTimeout(() => playBeep(70, 750), delay);
        delay += 140;
      } else if (sym === '-') {
        setTimeout(() => playBeep(210, 750), delay);
        delay += 280;
      } else if (sym === ' ') {
        delay += 100;
      } else if (sym === '/') {
        delay += 250;
      }
    });
  };

  const handleCopyMorse = () => {
    navigator.clipboard.writeText(morseOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reconxProject = PROJECTS_DATA.find((p) => p.id === 'reconx')!;
  const morsevisionProject = PROJECTS_DATA.find((p) => p.id === 'morsevision')!;

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Page Header */}
      <div className="border-b border-[#e6e4dc] pb-8 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-mono text-xs">[</span>
          <span className="text-[#006257] font-mono text-xs font-semibold tracking-wider uppercase">
            PROJECT CASE STUDIES // PRACTICAL SOFTWARE
          </span>
          <span className="text-zinc-400 font-mono text-xs">]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 mt-3 font-sans tracking-tight">
          Featured Projects &amp; Software
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed font-sans">
          Practical security scanning systems and real-time communication tools built with Python, Flask, Nmap, SQLite, and vanilla JavaScript.
        </p>
      </div>

      {/* ================= PROJECT 1: RECONX (LARGE FEATURED EDITORIAL CARD) ================= */}
      <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-8">
        
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#006257] bg-[#e8f4f2] px-3 py-1 rounded-md">
              PROJECT 01
            </span>
            <span className="text-xs font-medium text-zinc-500 font-sans">
              Cybersecurity Web Application
            </span>
          </div>
          <span className="text-xs font-medium text-[#006257] bg-[#e8f4f2] px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006257]" />
            Production Ready
          </span>
        </div>

        {/* Content & Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-sans">
                {reconxProject.title}
              </h2>
              <div className="text-sm font-semibold text-[#006257] font-sans">
                {reconxProject.subtitle}
              </div>
            </div>

            {/* Resume Source Description */}
            <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
              {reconxProject.description}
            </p>

            {/* Key Capabilities */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
                Key Functionality &amp; Highlights:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 font-sans">
                {reconxProject.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#006257] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Badges */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
                Technologies Used:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {reconxProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-zinc-800 bg-[#f4f3ef] border border-[#e5e3da] px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedProject('reconx')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#006257] hover:bg-[#004a42] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <Layers size={15} />
                <span>View Architecture Pipeline</span>
              </button>

              <a
                href={reconxProject.githubUrl || PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <span>View on GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Flow Preview Box */}
          <div className="lg:col-span-5 bg-[#faf9f6] border border-[#e6e4dc] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <div className="font-bold text-xs uppercase tracking-wide text-zinc-800 font-sans flex items-center gap-2">
                <Search size={14} className="text-[#006257]" />
                <span>Reconnaissance Flow</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">NMAP + WHOIS + DNS</span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="p-3 bg-white rounded-xl border border-zinc-200 space-y-1">
                <div className="font-bold text-zinc-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#e8f4f2] text-[#006257] font-mono text-xs flex items-center justify-center font-bold">1</span>
                  Target Discovery
                </div>
                <p className="text-zinc-600 text-[12px] leading-relaxed pl-7">
                  Resolves target host IPs and scans for open ports and running service signatures using Nmap.
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-zinc-200 space-y-1">
                <div className="font-bold text-zinc-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#e8f4f2] text-[#006257] font-mono text-xs flex items-center justify-center font-bold">2</span>
                  Domain Intelligence
                </div>
                <p className="text-zinc-600 text-[12px] leading-relaxed pl-7">
                  Parses registrar details, creation dates, and DNS records (A, MX, TXT, NS).
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-zinc-200 space-y-1">
                <div className="font-bold text-zinc-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#e8f4f2] text-[#006257] font-mono text-xs flex items-center justify-center font-bold">3</span>
                  Reporting &amp; History
                </div>
                <p className="text-zinc-600 text-[12px] leading-relaxed pl-7">
                  Classifies identified security exposures and compiles downloadable scan reports with SQLite logging.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= PROJECT 2: MORSEVISION (INTERACTIVE SIMULATOR CARD) ================= */}
      <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-8">
        
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#006257] bg-[#e8f4f2] px-3 py-1 rounded-md">
              PROJECT 02
            </span>
            <span className="text-xs font-medium text-zinc-500 font-sans">
              Web Application &amp; Learning Tool
            </span>
          </div>
          <span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Active Utility
          </span>
        </div>

        {/* Content & Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-sans">
                {morsevisionProject.title}
              </h2>
              <div className="text-sm font-semibold text-[#006257] font-sans">
                {morsevisionProject.subtitle}
              </div>
            </div>

            {/* Resume Source Description */}
            <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
              {morsevisionProject.description}
            </p>

            {/* Key Capabilities */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
                Key Functionality &amp; Highlights:
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 font-sans">
                {morsevisionProject.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-[#006257] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Badges */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
                Technologies Used:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {morsevisionProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-zinc-800 bg-[#f4f3ef] border border-[#e5e3da] px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={morsevisionProject.githubUrl || PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#006257] hover:bg-[#004a42] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                <span>View on GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Interactive Live Simulator */}
          <div className="lg:col-span-6 bg-[#faf9f6] border border-[#e6e4dc] rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <div className="font-bold text-xs uppercase tracking-wide text-zinc-800 font-sans flex items-center gap-2">
                <Volume2 size={15} className="text-[#006257]" />
                <span>Interactive Live Morse Simulator</span>
              </div>
              <span className="text-[11px] font-mono text-[#006257] font-semibold">TEST REAL-TIME</span>
            </div>

            <p className="text-xs text-zinc-600 font-sans">
              Type text below to convert into International Morse Code and synthesize live acoustic dits and dahs using Web Audio:
            </p>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-700 uppercase font-sans">
                  Input Text:
                </label>
                <input
                  type="text"
                  value={morseInput}
                  onChange={(e) => setMorseInput(e.target.value.slice(0, 35))}
                  placeholder="Type text here..."
                  className="w-full bg-white border border-zinc-300 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 font-mono focus:outline-none focus:border-[#006257] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-zinc-700 uppercase font-sans">
                  Morse Code Output:
                </label>
                <div className="p-3 bg-white rounded-xl border border-zinc-300 font-mono text-xs text-zinc-900 tracking-widest break-all min-h-[46px] flex items-center justify-between gap-2">
                  <span>{morseOutput || '// WAITING FOR INPUT'}</span>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleCopyMorse}
                      aria-label="Copy Morse Code"
                      className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors cursor-pointer"
                      title="Copy Morse Code"
                    >
                      {copied ? <Check size={14} className="text-[#006257]" /> : <Copy size={14} />}
                    </button>

                    <button
                      onClick={handlePlayMorse}
                      aria-label="Play Morse Audio"
                      className="p-1.5 rounded-lg bg-[#e8f4f2] hover:bg-[#d5ebe7] text-[#006257] transition-colors flex items-center gap-1 text-xs font-sans font-semibold cursor-pointer"
                      title="Play Audio Tones"
                    >
                      <Volume2 size={14} />
                      <span className="hidden sm:inline text-[11px]">Play</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-500 font-sans pt-1">
              Supports letters A-Z, numbers 0-9, and space separators with standard 750 Hz tone frequency.
            </div>
          </div>

        </div>

      </div>

      {/* Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-[#e6e4dc] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="text-xs font-mono text-[#006257] uppercase tracking-wider font-semibold">
                  SYSTEM ARCHITECTURE
                </span>
                <h3 className="text-xl font-bold text-zinc-900 mt-1 font-sans">
                  ReConX — Network &amp; Web Reconnaissance Workflow
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-[#faf9f6] border border-zinc-200 space-y-2">
                <div className="text-[#006257] font-bold uppercase font-mono text-xs">
                  Execution Pipeline
                </div>
                <div className="text-zinc-700 leading-relaxed space-y-1">
                  <p>1. <strong>Input &amp; Validation:</strong> User submits a target IP or domain through the responsive Flask dashboard.</p>
                  <p>2. <strong>Reconnaissance Core:</strong> Multi-threaded execution invoking Nmap for open ports and service detection, WHOIS lookup for registrar details, and DNS record queries.</p>
                  <p>3. <strong>Risk Classification:</strong> Analysis engine parses output to highlight exposed services and common misconfigurations.</p>
                  <p>4. <strong>Audit Reporting:</strong> Saves complete audit logs to SQLite and compiles downloadable summary reports.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f6] border border-zinc-200 space-y-2">
                <div className="text-zinc-900 font-bold uppercase font-mono text-xs">
                  Technologies Applied
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {reconxProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-white text-zinc-700 text-xs border border-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-200">
              <a
                href={reconxProject.githubUrl || PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#006257] hover:bg-[#004a42] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                Open Project on GitHub &gt;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
