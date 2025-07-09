import { analyzeText } from "@/util/sentimentAnalyser";
import { DatabaseBackup } from "lucide-react";

type setimentAnalysisProp = {
    data: string;
}

export function  SentimentAnalyser({data}: setimentAnalysisProp){
    const sentimentResp = analyzeText(data);
    console.log(sentimentResp);
    return(
        <>
            <h2>This is sentimentAnalyser</h2>
        </>
    )
}

