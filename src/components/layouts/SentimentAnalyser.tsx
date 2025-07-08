import { analyzeText } from "@/util/sentimentAnalyser";

export function  SentimentAnalyser(text: string){
    const sentimentResp = analyzeText(text);
    console.log(sentimentResp);
}

