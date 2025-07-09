import { analyzeText } from "@/util/sentimentAnalyser";
import { useLocation } from "react-router-dom";
import SentimentSlider from "./SentimentAnalyserSlider";


export function  SentimentAnalyser(){

    const location = useLocation();
    const message = location.state?.message;

    console.log("Sentiment Analysis Message",message);

    const sentimentResp = analyzeText(message);
    console.log(sentimentResp);
    return(
        <>
     <div className="p-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Sentiment Analysis</h2>
      <p className="text-lg text-white mb-2">
        <strong>Feedback:</strong> {message}
      </p>

      <SentimentSlider score={sentimentResp.score} />

      <div className="mt-6 text-white space-y-1">
        <p><strong>Score:</strong> {sentimentResp.score}</p>
        <p><strong>Comparative:</strong> {sentimentResp.comparative.toFixed(2)}</p>
        <p><strong>Positive Words:</strong> {sentimentResp.positive.join(", ") || "None"}</p>
        <p><strong>Negative Words:</strong> {sentimentResp.negative.join(", ") || "None"}</p>
      </div>
    </div>
        </>
    )
}

