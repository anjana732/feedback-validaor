import { analyzeText } from "@/util/sentimentAnalyser";
import { useLocation } from "react-router-dom";
import SentimentSlider from "./SentimentAnalyserSlider";

export function SentimentAnalyser() {
  const location = useLocation();
  const message = location.state?.message;

  if (!message) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        No feedback message received.
      </div>
    );
  }

  const sentimentResp = analyzeText(message);

  return (
    <div className="min-h-screen px-4 py-10 bg-zinc-950 text-white flex justify-center items-start">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">🧠 Sentiment Analysis</h2>
          <p className="text-zinc-400 text-sm">Analysis of your submitted feedback</p>
        </div>

        {/* Feedback Text Centered */}
        <div className="text-center">
          <p className="text-base text-zinc-300">
            <span className="font-semibold text-white">Feedback:</span> {message}
          </p>
        </div>

        {/* Slider */}
        <SentimentSlider score={sentimentResp.score} />

        {/* Score and Word Details - Smaller Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-300 text-center">
          <div className="bg-zinc-800 py-3 px-2 rounded-md border border-zinc-700">
            <p className="text-white text-base font-medium">Score</p>
            <p className="mt-0.5 text-sm">{sentimentResp.score}</p>
          </div>

          <div className="bg-zinc-800 py-3 px-2 rounded-md border border-zinc-700">
            <p className="text-white text-base font-medium">Comparative</p>
            <p className="mt-0.5 text-sm">{sentimentResp.comparative.toFixed(2)}</p>
          </div>

          <div className="bg-zinc-800 py-3 px-2 rounded-md border border-zinc-700">
            <p className="text-white text-base font-medium mb-1">Words</p>
            <p>
              <strong>Positive:</strong>{" "}
              {sentimentResp.positive.length > 0 ? sentimentResp.positive.join(", ") : "None"}
            </p>
            <p>
              <strong>Negative:</strong>{" "}
              {sentimentResp.negative.length > 0 ? sentimentResp.negative.join(", ") : "None"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
