import React from 'react';

interface CyberBadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'purple' | 'slate' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const CyberBadge: React.FC<CyberBadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'sm',
  icon,
  className = ''
}) => {
  const variantStyles = {
    cyan: 'bg-[#e8f4f2] text-[#006257] border-[#b8dfd8]',
    emerald: 'bg-[#e8f4f2] text-[#006257] border-[#b8dfd8]',
    purple: 'bg-[#f3effb] text-[#5b21b6] border-[#ddd6fe]',
    slate: 'bg-[#f4f4f5] text-zinc-700 border-zinc-200',
    amber: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-medium'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border transition-colors duration-150 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="opacity-80 scale-90">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
