'use client';
import { useState, useEffect } from 'react';

const TARGET = new Date('2026-12-01T00:00:00').getTime();

function parts(now: number) {
  const difference = TARGET - now;
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => parts(Date.now()));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(parts(Date.now()));
    const interval = setInterval(() => {
      const next = parts(Date.now());
      setTimeLeft(next);
      if (!next) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="flex gap-4 items-center mt-2 h-8" aria-hidden="true" />;
  }

  if (!timeLeft) {
    return (
      <div className="flex gap-2 items-center mt-2">
        <span className="bg-rose-600 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
          Live now
        </span>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center mt-2" role="timer" aria-live="off">
      {[
        { label: 'D', value: timeLeft.days },
        { label: 'H', value: timeLeft.hours },
        { label: 'M', value: timeLeft.minutes },
        { label: 'S', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="text-2xl font-black text-emerald-950 tabular-nums">
            {item.value < 10 ? `0${item.value}` : item.value}
            <span className="text-rose-600 text-sm ml-0.5">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
