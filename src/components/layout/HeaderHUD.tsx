import React from 'react';
import { MapPin } from 'lucide-react';

export const HeaderHUD: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfa] border-b border-[#e6e4dc] px-4 sm:px-8 py-2 text-[11px] font-mono text-zinc-500 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Side: Editorial Identifier */}
        <div className="flex items-center gap-2 text-zinc-600">
          <span className="text-zinc-400 font-normal">[</span>
          <span className="font-semibold tracking-wider text-zinc-800 uppercase">
            NAVEEN KUMAR S
          </span>
          <span className="text-zinc-400 font-normal">/</span>
          <span className="text-zinc-500 hidden xs:inline">
            PERSONAL PORTFOLIO
          </span>
          <span className="text-zinc-400 font-normal">]</span>
        </div>

        {/* Right Side: Professional Status */}
        <div className="flex items-center gap-4 text-[11px]">
          <div className="hidden sm:flex items-center gap-1.5 text-zinc-500">
            <MapPin size={11} className="text-[#006257]" />
            <span>Coimbatore, Tamil Nadu</span>
          </div>

          <div className="flex items-center gap-2 bg-[#e8f4f2] border border-[#b8dfd8] px-2.5 py-0.5 rounded-full text-[#006257] font-sans text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#006257] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#006257]" />
            </span>
            <span className="font-medium">
              Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
