import React from 'react';
import { INTERNSHIP_DATA, CERTIFICATIONS_DATA } from '../../data/resumeData';
import {
  Award,
  Terminal,
  Radio,
  Activity,
  Bug,
  Building2,
  Trophy,
  Check,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const TOOL_ICONS: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={18} className="text-[#006257]" />,
  Radio: <Radio size={18} className="text-[#006257]" />,
  Activity: <Activity size={18} className="text-[#006257]" />,
  Bug: <Bug size={18} className="text-[#006257]" />
};

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Page Header */}
      <div className="border-b border-[#e6e4dc] pb-8 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-mono text-xs">[</span>
          <span className="text-[#006257] font-mono text-xs font-semibold tracking-wider uppercase">
            PRACTICAL EXPERIENCE // INTERNSHIP &amp; AWARDS
          </span>
          <span className="text-zinc-400 font-mono text-xs">]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 mt-3 font-sans tracking-tight">
          Experience &amp; Achievements
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed font-sans">
          Hands-on security testing workflows, network auditing experience at Hackup Technology, and academic achievements.
        </p>
      </div>

      {/* ================= INTERNSHIP EXPERIENCE ================= */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-lg font-sans">
            <Building2 size={20} className="text-[#006257]" />
            <span>Cybersecurity Internship</span>
          </div>
          <span className="text-xs font-medium text-[#006257] bg-[#e8f4f2] px-3 py-1 rounded-full">
            Completed &bull; Verified
          </span>
        </div>

        {/* Main Internship Card */}
        <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Organization & Role */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-5">
            <div>
              <span className="text-xs font-mono font-bold text-[#006257] uppercase tracking-wider">
                {INTERNSHIP_DATA.type}
              </span>
              <h2 className="text-2xl font-extrabold text-zinc-900 font-sans mt-0.5">
                {INTERNSHIP_DATA.role}
              </h2>
              <div className="text-sm font-semibold text-zinc-600 font-sans flex items-center gap-1.5 mt-1">
                <Building2 size={14} className="text-[#006257]" />
                <span>{INTERNSHIP_DATA.company}</span>
              </div>
            </div>

            <span className="w-fit text-xs font-medium text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-lg border border-zinc-200">
              Coimbatore, Tamil Nadu
            </span>
          </div>

          {/* Actual Responsibilities (Verbatim from Resume) */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
              Core Responsibilities &amp; Workflows:
            </div>
            <div className="space-y-2.5">
              {INTERNSHIP_DATA.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#faf9f6] border border-zinc-200 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#e8f4f2] text-[#006257] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Applied Cards */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide font-sans">
              Security Tools Mastered &amp; Applied:
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INTERNSHIP_DATA.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-5 rounded-xl bg-white border border-[#e6e4dc] hover:border-[#b8dfd8] shadow-sm hover:shadow transition-all space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#e8f4f2] flex items-center justify-center text-[#006257]">
                    {TOOL_ICONS[tool.icon] || <Terminal size={18} />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 font-sans">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-zinc-600 font-sans mt-1 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= CERTIFICATIONS & ACHIEVEMENTS ================= */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-lg font-sans">
            <Trophy size={20} className="text-[#006257]" />
            <span>Certifications &amp; Achievements</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">HONORS &amp; CREDENTIALS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isFirstPrize = cert.category === 'Competition';
            const isHackathon = cert.category === 'Hackathon';

            return (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-[#e6e4dc] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#006257] bg-[#e8f4f2] px-2.5 py-0.5 rounded">
                      {cert.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#f7f6f2] flex items-center justify-center text-[#006257]">
                      {isFirstPrize ? (
                        <Trophy size={16} />
                      ) : isHackathon ? (
                        <Sparkles size={16} />
                      ) : (
                        <Award size={16} />
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 font-sans leading-snug">
                    {cert.title}
                  </h3>

                  {cert.issuer && (
                    <div className="text-xs font-medium text-zinc-500 font-sans">
                      {cert.issuer}
                    </div>
                  )}

                  {cert.description && (
                    <p className="text-xs text-zinc-600 font-sans leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-sans">
                  <span>Credential Status:</span>
                  <span className="text-[#006257] font-semibold flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
