import React, { useState, useEffect } from 'react';

const STATUS_MESSAGES = [
  "Analyzing networks, securing systems.",
  "Auditing open ports & protocols.",
  "Reconnaissance engine standing by.",
  "SOC telemetry: ALL SYSTEMS NORMAL."
];

export const TerminalBlock: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = STATUS_MESSAGES[currentIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 55);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3200);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIdx((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIdx]);

  return (
    <div
      className={`rounded-lg bg-black/60 border border-emerald-500/25 px-3.5 py-2.5 font-mono text-xs flex items-center justify-between shadow-inner ${className}`}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="text-emerald-500 font-bold select-none">&gt;</span>
        <span className="text-emerald-400 font-medium tracking-tight truncate">
          {displayedText}
        </span>
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
      <span className="text-[10px] text-emerald-500/40 uppercase tracking-widest ml-2 flex-shrink-0 font-mono">
        EXEC
      </span>
    </div>
  );
};
