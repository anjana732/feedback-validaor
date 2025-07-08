import Sentiment from 'sentiment';

const sentiment  = new Sentiment();

export function analyzeText(text:string){
    return sentiment.analyze(text);
}
