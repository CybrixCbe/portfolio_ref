import React from 'react';

export const MatrixBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Delicate Architectural Grid (inspired by SECORA mockup) */}
      <div className="absolute inset-0 bg-light-grid-pattern opacity-70" />
      
      {/* Soft warm vignette gradient that fades gently at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#fcfbf9_95%)]" />

      {/* Very faint decorative watermark branding like in SECORA */}
      <div className="absolute right-10 top-24 select-none opacity-[0.03] text-zinc-950 font-sans font-black text-[13vw] tracking-tighter pointer-events-none hidden lg:block">
        PORTFOLIO
      </div>
    </div>
  );
};
