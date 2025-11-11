"use client";
import { FC, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  label: string;
  duration?: number;
}

const Counter: FC<CounterProps> = ({ target, label, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);
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
    <div className="flex items-start gap-2 sm:gap-4">
      <h3 
         className="text-[42px] sm:text-[48px] md:text-[56px] font-bold leading-none text-white"
         style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
        {count}
      </h3>

      <span
        className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 font-normal leading-snug max-w-[150px] wrap-break-word"
      >
        {label}
      </span>
    </div>
  );
};

export default Counter;
