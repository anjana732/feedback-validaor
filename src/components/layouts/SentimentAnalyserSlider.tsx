import { useEffect } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

type SentimentSliderProps = {
  score: number; // Sentiment score between -5 and +5
};

const getSentimentVisual = (score: number) => {
  if (score <= -4) return { emoji: "😠", label: "VERY LOW" };
  if (score <= -1) return { emoji: "😢", label: "LOW" };
  if (score === 0) return { emoji: "😐", label: "NEUTRAL" };
  if (score <= 3) return { emoji: "🙂", label: "GOOD" };
  return { emoji: "😄", label: "EXCELLENT" };
};

export default function SentimentSlider({ score }: SentimentSliderProps) {
  const finalPercent = Math.max(Math.min((score + 5) * 10, 100), 0);

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    duration: 1.8,
    bounce: 0,
    damping: 15,
    stiffness: 80,
  });

  const widthStyle = useTransform(smoothProgress, (v) => `${v}%`);
  const leftStyle = useTransform(smoothProgress, (v) => `calc(${v}% + 2px)`);

  const { emoji, label } = getSentimentVisual(score);

  useEffect(() => {
    const timeout = setTimeout(() => {
      progress.set(finalPercent);
    }, 300);
    return () => clearTimeout(timeout);
  }, [finalPercent]);

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-4 border border-red-200 rounded-md bg-red-50">
      <h3 className="text-center text-base font-semibold text-zinc-800 mb-4">
        Your Instamatch score
      </h3>

      <div className="relative w-full h-20">
        {/* Floating Emoji Pointer */}
        <motion.div
          className="absolute z-10 -translate-x-1/2"
          style={{ left: leftStyle }}
        >
          <div className="relative inline-flex items-center px-2 py-1 text-xs font-medium text-red-800 bg-red-100 border border-red-300 rounded shadow">
            {label} <span className="ml-1 text-sm">{emoji}</span>
            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-red-100 border-l border-b border-red-300" />
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="h-10" />

        {/* Progress Bar */}
        <div className="relative w-full h-5 bg-gray-300 overflow-hidden rounded-sm">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
            style={{ width: widthStyle }}
          />
        </div>
      </div>
    </div>
  );
}
