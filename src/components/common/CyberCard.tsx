import React from 'react';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  cornerAccent?: boolean;
  variant?: 'default' | 'cyan' | 'emerald' | 'purple';
}

export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  cornerAccent = false,
  variant = 'default'
}) => {
  const borderVariants = {
    default: 'border-[#e6e4dc] hover:border-[#d4d1c5]',
    cyan: 'border-[#e6e4dc] hover:border-[#006257]/40',
    emerald: 'border-[#e6e4dc] hover:border-[#006257]/50',
    purple: 'border-[#e6e4dc] hover:border-[#7c3aed]/30'
  };

  return (
    <div
      className={`relative rounded-2xl bg-white border ${borderVariants[variant]} shadow-[0_1px_3px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.02)] transition-all duration-300 ${
        glowOnHover ? 'hover:shadow-[0_8px_25px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.02)] hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {cornerAccent && (
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#006257] opacity-30" />
      )}
      {children}
    </div>
  );
};
