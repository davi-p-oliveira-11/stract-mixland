'use client'
import { FC, useEffect, useState } from "react";

interface CounterProps {
  target: number; // number to count up to
  label: string; // the word(s) next to the number
  duration?: number; // animation duration in ms
}

const Counter: FC<CounterProps> = ({ target, label, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30); // update every 30ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {count}
      </h3>
      <span className="text-lg sm:text-xl md:text-2xl text-white font-medium">
        {label}
      </span>
    </div>
  );
};

export default Counter;
