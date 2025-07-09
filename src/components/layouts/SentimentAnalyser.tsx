import { analyzeText } from "@/util/sentimentAnalyser";
import { useLocation } from "react-router-dom";


export function  SentimentAnalyser(){

    const location = useLocation();
    const message = location.state?.message;

    console.log("Sentiment Analysis Message",message);

    const sentimentResp = analyzeText(message);
    console.log(sentimentResp);
    return(
        <>
 <h2>Sentiment Analysis Result</h2>
      <p><strong>Original Message:</strong> {message}</p>
      <p><strong>Score:</strong> {sentimentResp.score}</p>
      <p><strong>Comparative:</strong> {sentimentResp.comparative}</p>
      <p><strong>Positive words:</strong> {sentimentResp.positive.join(", ")}</p>
      <p><strong>Negative words:</strong> {sentimentResp.negative.join(", ")}</p>
        </>
    )
}

