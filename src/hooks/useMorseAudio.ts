import { useRef, useCallback } from 'react';

export function useMorseAudio() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playBeep = useCallback((durationMs: number = 80, freq: number = 700) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Smooth attack and decay to prevent clicking
      const now = ctx.currentTime;
      const dur = durationMs / 1000;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + dur + 0.05);
    } catch {
      // Audio context might be restricted before user interaction
    }
  }, []);

  return { playBeep };
}
