import { Button } from "../ui/button";
import NewsPopup from "./newsPopup";

export default function Header(){
     return (
     <div className="w-full px-8 py-6 flex items-center gap-6">
      <p className="text-white text-3xl font-semibold">
        Click the button next to get insight for feedback.
      </p>
      {/* <Button onClick={onAction}>
        Get Insight
      </Button> */}
      <NewsPopup text="Get Insight"/>
    </div>
    
  );
}