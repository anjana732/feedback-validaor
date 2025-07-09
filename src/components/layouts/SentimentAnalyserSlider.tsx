import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type SentimentSliderProps = {
  score: number;
};

const getSentimentVisual = (score: number) => {
  if (score <= -4) return { emoji: "😠", color: "bg-red-600", label: "Very Negative" };
  if (score <= -1) return { emoji: "😕", color: "bg-orange-500", label: "Negative" };
  if (score === 0) return { emoji: "😐", color: "bg-yellow-400", label: "Neutral" };
  if (score <= 3) return { emoji: "😊", color: "bg-lime-500", label: "Positive" };
  return { emoji: "😄", color: "bg-green-600", label: "Very Positive" };
};

export default function SentimentSlider({ score }: SentimentSliderProps) {
  const [fillPercent, setFillPercent] = useState(50);
  const { emoji, color, label } = getSentimentVisual(score);

  useEffect(() => {
    const mapped = Math.max(Math.min((score + 5) * 10, 100), 0); // map -5 to +5 -> 0 to 100
    setFillPercent(mapped);
  }, [score]);

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div className="mb-4 text-center text-xl font-semibold text-white">
        Sentiment: {label}
      </div>

      <div className="relative h-16">
        {/* Slider Bar */}
        <div className="w-full h-6 bg-zinc-800 rounded-full overflow-hidden shadow-inner mt-5">
          <motion.div
            className={`h-full ${color} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${fillPercent}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 14 }}
          />
        </div>

        {/* Emoji above the slider */}
        <motion.div
          className="absolute top-0 text-3xl"
          initial={{ left: "50%" }}
          animate={{ left: `calc(${fillPercent}% - 14px)` }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          {emoji}
        </motion.div>
      </div>
    </div>
  );
}
