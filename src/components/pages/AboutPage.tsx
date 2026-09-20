import React from 'react';
import { EDUCATION_DATA, SKILLS_DATA, PERSONAL_DETAILS } from '../../data/resumeData';
import {
  GraduationCap,
  Award,
  Terminal,
  Shield,
  Radio,
  Activity,
  Bug,
  Code,
  Cpu,
  Globe,
  GitBranch,
  Lightbulb,
  MessageSquare,
  MapPin,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield size={16} className="text-[#006257]" />,
  Terminal: <Terminal size={16} className="text-[#006257]" />,
  Radio: <Radio size={16} className="text-[#006257]" />,
  Activity: <Activity size={16} className="text-[#006257]" />,
  Bug: <Bug size={16} className="text-[#006257]" />,
  Code: <Code size={16} className="text-[#006257]" />,
  Cpu: <Cpu size={16} className="text-[#006257]" />,
  Globe: <Globe size={16} className="text-[#006257]" />,
  GitBranch: <GitBranch size={16} className="text-[#006257]" />,
  Lightbulb: <Lightbulb size={16} className="text-[#006257]" />,
  MessageSquare: <MessageSquare size={16} className="text-[#006257]" />
};

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Page Header */}
      <div className="border-b border-[#e6e4dc] pb-8 pt-2">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-mono text-xs">[</span>
          <span className="text-[#006257] font-mono text-xs font-semibold tracking-wider uppercase">
            BACKGROUND // BIOGRAPHY &amp; EDUCATION
          </span>
          <span className="text-zinc-400 font-mono text-xs">]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 mt-3 font-sans tracking-tight">
          GET TO KNOW ME
        </h1>
        <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed font-sans">
          Information Technology student with a dedicated interest in cybersecurity, network reconnaissance, and software engineering.
        </p>
      </div>

      {/* Editorial Profile Section */}
      <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Portrait */}
        <div className="lg:col-span-4">
          <div className="relative rounded-2xl overflow-hidden bg-[#f4f3ef] border border-zinc-200 aspect-[4/4.8] shadow-sm max-w-sm mx-auto">
            <img
              src="/assets/naveen-avatar.jpg"
              alt="Naveen Kumar S"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column: Bio & Statement */}
        <div className="lg:col-span-8 space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#006257] uppercase tracking-wider">
              ABOUT NAVEEN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-sans">
              Cybersecurity-Focused IT Student &amp; Builder
            </h2>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans pt-0.5">
              <MapPin size={13} className="text-[#006257]" />
              <span>Coimbatore, Tamil Nadu &bull; B.Sc. Information Technology</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-700 font-sans leading-relaxed">
            {PERSONAL_DETAILS.objective}
          </p>

          <p className="text-sm text-zinc-600 font-sans leading-relaxed">
            I enjoy breaking down complex network protocols, auditing vulnerabilities, and writing clean, reproducible software that solves real technical problems. Outside coursework, I actively explore open-source tools, practice hands-on security labs, and collaborate in hackathons.
          </p>

          {/* Statement of Growth & Learning */}
          <div className="p-4 rounded-xl bg-[#f7f6f2] border-l-3 border-[#006257] space-y-1">
            <div className="text-xs font-bold text-zinc-900 font-sans flex items-center gap-2">
              <BookOpen size={14} className="text-[#006257]" />
              <span>Continuous Growth &amp; Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans italic leading-relaxed">
              "Technology is constantly evolving. My focus is on mastering computing fundamentals, cultivating disciplined curiosity, and building practical software that reinforces security from the ground up."
            </p>
          </div>
        </div>

      </div>

      {/* ================= EDUCATION TIMELINE ================= */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-lg font-sans">
            <GraduationCap size={20} className="text-[#006257]" />
            <span>Education Timeline</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">ACADEMIC RECORD</span>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#b8dfd8] space-y-8 my-4 ml-2 sm:ml-4">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#006257] group-hover:scale-125 transition-transform flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#006257]" />
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#006257]">
                      {edu.period}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 mt-0.5 font-sans">
                      {edu.degree}
                    </h3>
                  </div>

                  <span className="w-fit px-3 py-1 rounded-full bg-[#e8f4f2] text-[#006257] font-mono font-bold text-xs">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-700 font-sans">
                    {edu.institution}
                  </div>

                  {edu.highlights && (
                    <ul className="mt-3 space-y-1.5 text-xs text-zinc-600 font-sans">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#006257] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SKILLS SECTION ================= */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2.5 text-zinc-900 font-bold text-lg font-sans">
            <Award size={20} className="text-[#006257]" />
            <span>Technical Skills Matrix</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">RESUME-VERIFIED &bull; NO ESTIMATED % BARS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group) => (
            <div key={group.category} className="bg-white rounded-2xl border border-[#e6e4dc] p-6 shadow-sm space-y-4">
              <div className="border-b border-zinc-100 pb-3">
                <h3 className="text-sm font-bold text-zinc-900 uppercase font-sans tracking-wide">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#faf9f6] border border-zinc-200 hover:border-[#006257]/40 hover:bg-white transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white border border-zinc-200 text-[#006257] group-hover:border-[#b8dfd8] shrink-0">
                      {ICON_MAP[skill.icon] || <Terminal size={16} />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900 font-sans group-hover:text-[#006257] transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-zinc-500 font-sans">
                        {skill.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
